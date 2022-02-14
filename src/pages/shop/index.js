import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import ProductCard from "../../components/ProductCard";
const Index = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="page__shop">
      <TitlePage title="Eshop" />
      <div className="products__grid">
        {products &&
          products.map((product) => (
           <ProductCard product={product} key={product.id}/>
          ))}
      </div>
    </div>
  );
};

export default Index;
