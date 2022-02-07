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
                  <button className="btn btn__color-black">Ajouter au panier</button>
                </p>
              </div>
            </div>
    );
}

export default Productcard;
