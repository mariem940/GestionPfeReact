import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditEtudiant = () => {
  let history = useHistory();
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState({
    nomutilisateur: "",
    email: "",
    cin: "",
    numcarte: "",
    password: ""
  });

  const { nomutilisateur, email, cin, numcarte, password } = etudiant;
  const onInputChange = e => {
    setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEtudiant();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/etudiant/`+id, etudiant);
    history.push("/");
  };

  const loadEtudiant = async () => {
    const res = await axios.get(`http://localhost:4000/api/etudiant/`+id);
    setEtudiant(res.data.reverse());
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Etudiant</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="nomutilisateur"
              value={nomutilisateur}
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
              name="numcarte"
              value={numcarte}
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
          <button className="btn btn-warning btn-block">Update Enseignant</button>
        </form>
      </div>
    </div>
  );
};

export default EditEtudiant;
