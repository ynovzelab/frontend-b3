import React, {useState} from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import userService from "../../services/user.service";
const Index = () => {

  const [user, setUser] = useState({});

    const submitRegister = (e) => {
      e.preventDefault();
      console.log(user);
      userService.register(user).then(data => console.log(data)).catch(err => console.log(err));
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
          handleChange={(e) => setUser({...user, firstName:e.target.value})}
        />
        <Input
          label="Nom"
          name="lastName"
          id="lastName"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e) => setUser({...user, lastName:e.target.value})}
              />
        <Input
          label="Username"
          name="username"
          id="username"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e) => setUser({...user, username:e.target.value})}
              />
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={ (e) => setUser({...user, email:e.target.value})}
              />
        <Input
          label="Mot de passe"
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre nom de famille"
          handleChange={(e) => setUser({...user, password:e.target.value})}
              />
        <Button title="envoyer" classes="btn btn__color-black" type="submit"/>
      </form>
    </div>
  );
};

export default Index;
