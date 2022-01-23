import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",  
    cin: "",
    numcarte: ""
  });

  const { nom, prenom, email, cin, numcarte } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.nom]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:300/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <br></br>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Ajoute Etudiants</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Nom"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Prenom"
              name="prenom"
              value={prenom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Entrer Votre E-mail "
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre CIN "
              name="cin"
              value={cin}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre numéro de carte"
              name="numcarte"
              value={numcarte}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
