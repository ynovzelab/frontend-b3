import React from "react";
import Input from "../../components/input";
import Button from "../../components/Button";

const Index = () => {
    const submitRegister = (e) => {
        console.log(e);
        e.preventDefault();
        console.log("send");
    }
  return (
    <div className="page__register">
      <form className="form" onSubmit={(e)=> submitRegister(e)}>
        <Input
          label="Prénom"
          name="firstName"
          id="firstName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre prénom"
          handleChange={(e) => console.log(e)}
        />
        <Input
          label="Nom"
          name="lastName"
          id="lastName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e) => console.log(e)}
              />
        <Button title="envoyer" classes="btn btn__color-black" type="submit"/>
      </form>
    </div>
  );
};

export default Index;
