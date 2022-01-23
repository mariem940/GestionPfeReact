import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [enseignant, setEnseignant] = useState({
  nom: "",
  prenom: "",
    email: "",
    cin: "",
    garade: "",
    password:""
  });

  const { nom, prenom, email, cin, garade, password } = enseignant;
  const onInputChange = e => {
    setEnseignant({ ...enseignant, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEnseignant();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/enseignant/${id}`, enseignant);
    history.push("/");
  };

  const loadEnseignant = async () => {
    const result = await axios.get(`http://localhost:4000/api/enseignant/${id}`);
    setEnseignant(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="nom"
              value={nom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="prenom"
              value={prenom}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="cin"
              value={cin}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="garade"
              value={garade}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
