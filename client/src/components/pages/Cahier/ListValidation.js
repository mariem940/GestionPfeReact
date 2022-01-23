import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  toast
} from 'react-toastify';

import { useLocation } from "react-router-dom"
import { connect } from 'react-redux';


const ListValidation = () => {

    const [validations, setValidation] = useState([])
  useEffect(() => {
    loadValidation();
  }, []);

 
  


  const loadValidation = async () => {
    const result = await axios.get(`http://localhost:4000/api/validation/all`);
    setValidation(result.data.reverse());

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


export default ListValidation;


