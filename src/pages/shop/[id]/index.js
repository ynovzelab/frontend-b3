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
      .catch((err) => console.log(err));
  }, []);

  const addTocart = (element) => {
    //On créé un nouvel object avec une nouvelle propriété quantity
    let productToInsert = {
      id: element.id,
      title: element.title,
      image: element.image,
      price: element.price,
      quantity: 1
    };
    
    const cartArray = [];

    //Si j'ai déjà un ou des produits dans mon localstorage
    if (localStorage.getItem("cart")) {

      const localStorageCart = JSON.parse(localStorage.getItem("cart"));
      localStorageCart.forEach((product) => {
        cartArray.push(product);
      });

      console.log(cartArray);

      const indexOfExistingProduct = cartArray.findIndex((el) => el.id === element.id);

      if (indexOfExistingProduct !== -1) {
        cartArray[indexOfExistingProduct].quantity += 1;
      }
      else {
        cartArray.push(productToInsert);
      }
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
    //Si localstorage vide
    else {
      cartArray.push(productToInsert);
      localStorage.setItem("cart", JSON.stringify(cartArray));
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
