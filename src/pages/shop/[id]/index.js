import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
const Index = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = router.query.id;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div className="product_page">
      <TitlePage title={product && product.title} />
      <ProductPrice price={product && product.price} currency="€"/>
    </div>
  );
};

export default Index;
