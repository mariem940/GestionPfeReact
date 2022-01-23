import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { loadEnseignant } from "../../data/reducers/authprof";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/api/user/all");
    setUser(result.data.reverse());
  };

  const deleteUser = async _id => {
    await axios.delete(`http://localhost:4000/api/user/${_id}`);
    loadUsers();
  };

  const [enseignants, setEnseignant] = useState([]);

  useEffect(() => {
    loadEnseignants();
  }, []);

  const loadEnseignants = async () => {
    const result = await axios.get("http://localhost:4000/api/enseignant/");
    setEnseignant(result.data.reverse());
  };

  const deleteEnseignant = async _id => {
    await axios.delete(`http://localhost:4000/api/enseignant/${_id}`);
    loadEnseignants();
  };

  const [etudiants, setEtudiant] = useState([]);

  useEffect(() => {
    loadEtudiants();
  }, []);

  const loadEtudiants = async () => {
    const result = await axios.get("http://localhost:4000/api/etudiant/all");
    setEtudiant(result.data.reverse());
  };

  const deleteEtudiants = async _id => {
    await axios.delete(`http://localhost:4000/api/etudiant/${_id}`);
    loadEtudiants();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Administrateurs</h1>
        <Link className="btn btn-primary" to="/users/add">
        Ajoute Etudiants
      </Link>
      <Link className="btn btn-primary" to="/utilisateurs/AjouteEnseignant">
        Ajoute Enseignants
      </Link>
      <br></br>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                    Voir
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`}
                  >
                    Modifier
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="py-4">
        <h1>Enseignants</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enseignants.map((enseignant, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{enseignant.nom}</td>
                <td>{enseignant.prenom}</td>
                <td>{enseignant.email}</td>
                <td>
                <Link class="btn btn-primary mr-2" to={`/enseignant/${enseignant._id}`}>
                    Voir
                  </Link>
                <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/enseignant/edit/${enseignant._id}`}
                  >
                    Modifier
                  </Link>
                <Link
                    class="btn btn-danger"
                    onClick={() => deleteEnseignant(enseignant._id)}
                  >
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="py-4">
        <h1>Etudiants </h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom utilisateur</th>
              <th scope="col">Num carte</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((etudiant, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{etudiant.nomutilisateur}</td>
                <td>{etudiant.numcarte}</td>
                <td>{etudiant.email}</td>
                <td>
                <Link class="btn btn-primary mr-2" to={`/etudiant/${etudiant._id}`}>
                    Voir
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/etudiant/edit/${etudiant._id}`}
                  >
                    Modifier
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteEtudiants(etudiant._id)}
                  >
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
