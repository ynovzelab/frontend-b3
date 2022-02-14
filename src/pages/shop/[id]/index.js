import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
import Button from "../../../components/Button";

const Index = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = router.query.id;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch(err=>console.log(err))
  }, []);

    
    const addTocart = (element) => { 
        const cartArray = [];
        if (localStorage.getItem('cart')) {
            const localStorageCart = JSON.parse(localStorage.getItem('cart'));
            localStorageCart.forEach(product => {
                cartArray.push(product);    
            });
            cartArray.push(element);
            console.log(cartArray);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        else {
            cartArray.push(element);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
  };

  return (
    <div className="product_page">
      <TitlePage title={product && product.title} />
      <div className="text__center">
        <ProductPrice price={product && product.price} currency="€" />
        <Button
          type="button"
          classes="btn btn__color-black"
          function={() => addTocart(product)}
          title="ajouter au panier"
        />
      </div>
    </div>
  );
};

export default Index;
