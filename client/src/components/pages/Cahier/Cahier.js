import React, { useState , useEffect} from 'react';
import './style-cahier.css';
import { Link } from 'react-router-dom'
import { useHistory, Redirect } from "react-router-dom"

function Cahier ({id, title, description, definition, objectifs, consignes, techniques, deleteTask, updateTask}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(description)
  const [defintionToUpdate, setDefinitionToUpdate] = useState(definition)
  const [objectifsToUpdate, setObjectifsToUpdate] = useState(objectifs)
  const [consignesToUpdate, setConsignesToUpdate] = useState(consignes)
  const [techniquesToUpdate, setTechniquesToUpdate] = useState(techniques)
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, descriptionToUpdate, defintionToUpdate, objectifsToUpdate, consignesToUpdate, techniquesToUpdate)
    setUpdateMode(false)
  }
  console.log({id}) 
 const history = useHistory()
 const handleDetails = () => {
   history.push(`/tasks/${id}`)
 }
    return (
      
        <div className="container">
           {/* {taskId && <Redirect to={`/tasks/${id}`} /> } */}
          {!updateMode ? (
             <>
             {/* <div onClick={handleDetails} className="link"> */}
            <div class="card">
            <Link to={`/tasks/${id}`}>
            <h5 class="card-header">{title}</h5>
            </Link>
          {/* </div> */}
          
   
    <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => deleteTask(id)}>Delete</a>
    </div>
    <br></br>
    <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => setUpdateMode(true)}>Update</a>
    </div>
        </div>
        
        </>
          ) : (
            <div className="container">
      <div className="py-4">
        <div>
          <div class="form-group">
            <h2>Remplir votre cahier</h2>
        <label htmlFor="titre">Titre de projet</label>
          <input type="text"  name="title" value={titleToUpdate} onChange={(e) => setTitleToUpdate(e.target.value)} placeholder="écrivez le titre de votre projet" className="formField" />
          <label htmlFor="description">La description générale du projet</label>
          <input type="text"  name="description" value={descriptionToUpdate} onChange={(e) => setDescriptionToUpdate(e.target.value)} placeholder="écrivez la description de votre projet" className="formField" />
          <label htmlFor="definition">La définition globale du projet</label>
          <input type="text"  name="definition" value={defintionToUpdate} onChange={(e) => setDefinitionToUpdate(e.target.value)} placeholder="écrivez la définition globale de votre projet" className="formField" />
          <label htmlFor="objectifs">Les objectifs</label>
          <input type="text"  name="objectifs" value={objectifsToUpdate} onChange={(e) => setObjectifsToUpdate(e.target.value)} placeholder="écrivez les objectifs de votre projet" className="formField" />
          <label htmlFor="consignes">Les consignes d'acquisition</label>
          <input type="text"  name="consignes" value={consignesToUpdate} onChange={(e) => setConsignesToUpdate(e.target.value)} placeholder="écrivez les consignes d'acquisition de votre projet" className="formField" />
          <label htmlFor="techniques">Les spécifications techniques</label>
          <input type="text"  name="techniques" value={techniquesToUpdate} onChange={(e) => setTechniquesToUpdate(e.target.value)} placeholder="écrivez votre spécifications techniques" className="formField" />
          <button onClick={handleUpdateTask} className="myButton">Update </button>
        </div>
        </div>
        </div>
        </div>
          )}
        </div>
        
     
    );
  }


export default Cahier;
