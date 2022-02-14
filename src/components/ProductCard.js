import Link from "next/link";

const Productcard = (props) => {
    return (
        <div className="product__card">
              <div className="product__img">
                <img src={props.product.image} alt={props.product.title} />
              </div>
              <div className="product__data">
                <h2>{props.product.title}</h2>
                <p>{props.product.price} € </p>
                <p>
                  <Link href={`/shop/${props.product.id}`}>
                  {/* <Link href={'/shop/' + props.product.id} */}
                    <a>
                      Voir le produit
                    </a>
                  </Link>
                  <button className="btn btn__color-black">Ajouter au panier</button>
                </p>
              </div>
            </div>
    );
}

export default Productcard;
