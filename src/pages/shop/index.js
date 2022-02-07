import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";

const Index = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  return (
    <div className="page__shop">
      <TitlePage title="Eshop" />
      <div className="products__grid">
        {products &&
          products.map((product) => (
            <div className="product__card">
              <p>{product.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
