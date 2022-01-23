import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { loadEtudiant } from "../../data/reducers/authetud";
import { fetchEtudinatById } from "../services/etudt.service";

const Etudiant = () => {
  const [etudiant, setEtudiant] = useState({
  });
  const { id } = useParams();
  console.log('useParams(): ', useParams());
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEtudinatById(id)
      setEtudiant(result)
      console.log('data' , result)
    }
    fetchData()
  }, [id])
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Etudiant Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">nom utilisateur: {etudiant.nomutilisateur} </li>
        <li className="list-group-item">email: {etudiant.email}</li>
        <li className="list-group-item">CIN: {etudiant.cin}</li>
      </ul>
    </div>
  );
};

export default Etudiant;
