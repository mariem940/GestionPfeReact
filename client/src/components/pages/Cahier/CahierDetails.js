import React, { useEffect, useState } from "react"
import store from '../../../data/store';
import axios from "axios"
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchTaskById } from "../../services/tasks.service"
import { useParams, useLocation } from "react-router-dom"
import {addValidation as addValidationFromService} from '../../services/pfe.service'


import { Redirect } from 'react-router-dom';



function CahierDetails({enseignant, isAuth, isLoading}) {
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({})
  const [validation, setValidations] = useState([])

  
 
 //const { userId } = useParams()
  const { taskId } = useParams()
  
  
 
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchTaskById(taskId)
      setTask(result)
      setLoading(false)
    }
    fetchData()
  }, [taskId])


  const handleAddValidation = () => {
    if (enseignant) {
      const {_id} = enseignant
      console.log(_id)
    
    
    addValidation(taskId, _id) 
    console.log(taskId, _id)
  }
  }

  const addValidation = async (cahier_id, user_id) => {
    try {
    
      const newValidation = await addValidationFromService({
       cahier_id, user_id
        
      })
      setValidations([...validation, newValidation])
    
    } catch (err) {
      const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error => toast.error(error.msg))
        }

    }
  }
 
  

  return (
    <div className="task-details">
     
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <div className="container">
      <br></br>
    <div class="card">
  <h5 class="card-header">{task.title}</h5>
  <div class="card-body">
    <h5 class="card-title">La description générale du projet</h5>
    <p class="card-text">{task.description}</p>
    <h5 class="card-title">La définition globale du projet</h5>
    <p class="card-text">{task.definition}</p>
    <h5 class="card-title">Les objectifs</h5>
    <p class="card-text">{task.objectifs}</p>
    <h5 class="card-title">Les consignes d'acquisition</h5>
    <p class="card-text">{task.consignes}</p>
    <h5 class="card-title">Les spécifications techniques</h5>
    <p class="card-text">{task.techniques}</p>
  

    <div class="col">
     
    <button onClick={handleAddValidation} className="myButton">Validation </button>
    </div>
    
  </div>
</div>
</div>
        </>
      )}
    </div>
  )
}

const mapToStateProps = (state) => ({
  isAuth: state.authprof.isAuthenticated,
  isLoading: state.authprof.loading,
  enseignant: state.authprof.enseignant,
});
export default connect(mapToStateProps, )(CahierDetails);



