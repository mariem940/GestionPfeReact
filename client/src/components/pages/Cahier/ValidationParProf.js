import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  toast
} from 'react-toastify';

import { useLocation } from "react-router-dom"
import { connect } from 'react-redux';
import { fetchValidationsParProf } from "../../services/pfe.service";


const ValidationParProf = (enseignant, isAuth, isLoding) => {

    const [validations, setValidation] = useState([])
 useEffect(() => {
  
    loadValidationParProf();
  }, [])
;

  if ( enseignant.enseignant) {
    const { _id } = enseignant.enseignant;
    console.log(enseignant.enseignant)
console.log(_id)
  }

  const loadValidationParProf = async(_id) => {
    if ( enseignant.enseignant) {
      const { _id } = enseignant.enseignant
      console.log(enseignant.enseignant)
      console.log(_id)
      const result = await axios.get(`http://localhost:4000/api/validation/enseignant/`+_id);
    console.log(result.data)
    setValidation(result.data)
    console.log(validations)
    }
  
    
  };

 
  return (
    <div className="container">
      <br></br>
    <div className="card">
    <div className="card-body">
    {validations.map((validation, index) => (

      <div>
        key={validation.id}
            id={validation._id}
  <h5 className="card-header">{validation.cahier_id.title}</h5>

    <h5 className="card-title">Validé par</h5>
    <p className="card-text">{validation.user_id.nom}</p>
   
    
 </div>
   ))}
   </div>
   </div>
</div>

  );
};

const mapToStateProps = (state) => ({
   
    isLoading: state.authprof.loading,
    enseignant: state.authprof.enseignant,
  });
  export default connect(mapToStateProps, )(ValidationParProf);



