import React, { useState, useEffect } from "react";

import axios from "axios";
import { connect } from 'react-redux';



const CahierByEtud = (etudiant, isAuth, isLoading) => {
  const [cahiers, setCahier] = useState([]);
 
  
 
 useEffect(() => {
   
    loadCahierByEtud();
 }, []);


 if (etudiant.etudiant) {
  const {_id} = etudiant.etudiant
  console.log(etudiant.etudiant)}


  const loadCahierByEtud = async (_id) => {
    if (etudiant.etudiant) {
      const {_id} = etudiant.etudiant
      console.log(etudiant.etudiant)
      console.log(_id)
    
    const result = await axios.get(`http://localhost:4000/api/cahier/`+_id);
    setCahier(result.data);
    }
  };
 

 
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
 </div>
   ))}
   </div>
   </div>
</div>

  );
};



const mapToStateProps = (state) => ({
  isAuth: state.authetud.isAuthenticated,
  isLoading: state.authetud.loading,
  etudiant: state.authetud.etudiant,
});
export default connect(mapToStateProps, )(CahierByEtud);