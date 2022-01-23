import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchEnsgtById } from "../services/ensgts.service";


const Enseignant = () => {
  const [enseignant, setEnseignant] = useState({
  });
  const { id } = useParams();
  console.log('useParams(): ', useParams());
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEnsgtById(id)
      setEnseignant(result)
      console.log('data' , result)
    }
    fetchData()
  }, [id])
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Enseignant Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {enseignant.nom}</li>
        <li className="list-group-item">user name: {enseignant.prenom}</li>
        <li className="list-group-item">email: {enseignant.email}</li>
      </ul>
    </div>
  );
};

export default Enseignant;
