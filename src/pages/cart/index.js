import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const Index = () => {
  const [cart, setCart] = useState();

    const deleteCart = () => {
        localStorage.removeItem('cart');
        setCart(null);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div className="page__cart">
      {cart ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.title}</td>
                  <td>{cartItem.price}</td>
                  <td>
                    <button>-</button>
                    {cartItem.quantity}
                    <button>+</button>
                  </td>
                  <td>{cartItem.price * cartItem.quantity}</td>
                  {/* .Filter() */}
                  <td><button>Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* reduce() */}
          <p>Total : { }</p>
          <Button
            title="Supprimer le panier"
            classes="btn btn__color-white"
            type="button"
            function={deleteCart}
          />
        </>
      ) : (
        <p className="text__center">Votre panier est vide</p>
      )}
    </div>
  );
};

export default Index;
