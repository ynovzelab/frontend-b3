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
      });
  }, []);

  const addTocart = (element) => {
    console.log(element);
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
