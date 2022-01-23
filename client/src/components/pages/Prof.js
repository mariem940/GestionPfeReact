import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  toast
} from 'react-toastify';
import store from '../../data/store';
import { useLocation } from "react-router-dom"
import { connect } from 'react-redux';
import {addValidation as addValidationFromService} from '../services/pfe.service'

const ListCahier = (user, isAuth) => {
  const [cahiers, setCahier] = useState([]);
  const [validations, setValidations] = useState([])
 
 
  if (isAuth && user) {
    const { nom, _id } = user;
    console.log(nom)
    
  }
 
  useEffect(() => {
    loadCahier();
  }, []);

 
  


  const loadCahier = async () => {
    const result = await axios.get(`http://localhost:4000/api/cahier/all`);
    setCahier(result.data.reverse());

  };
  const handleAddValidation = () => {
    addValidation() 
  }
  const addValidation = async (id) => {
    try {
    
      const newValidation = await addValidationFromService({
        id
        
      })
      setValidations([...validations, newValidation])
    
    } catch (err) {
      const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => toast.error(error.msg))
        }

    }
  }
  return (
    <div className="container">
      <br></br>
    <div className="card">
    <div className="card-body">
    {cahiers.map((cahier, index) => (

      <div>
        key={cahier.id}
            id={cahier._id}
  <h5 className="card-header">{cahier.title}</h5>

    <h5 className="card-title">La description générale du projet</h5>
    <p className="card-text">{cahier.description}</p>
    <h5 className="card-title">La définition globale du projet</h5>
    <p className="card-text">{cahier.definition}</p>
    <h5 className="card-title">Les objectifs</h5>
    <p className="card-text">{cahier.objectifs}</p>
    <h5 className="card-title">Les consignes d'acquisition</h5>
    <p className="card-text">{cahier.consignes}</p>
    <h5 className="card-title">Les spécifications techniques</h5>
    <p className="card-text">{cahier.techniques}</p>
    <h5 className="card-title">Publier par</h5>
    <p className="card-text">{cahier.user_id.nomutilisateur}</p>
    <br></br>
    <div className="col">
    <button onClick={handleAddValidation} className="myButton">Validation </button>
    </div>
 </div>
   ))}
   </div>
   </div>
</div>

  );
};

const mapToStateProps = (state) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuthenticated,
});
export default connect(mapToStateProps)(ListCahier);


