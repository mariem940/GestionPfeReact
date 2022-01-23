import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useHistory, Redirect } from "react-router-dom"

function Annee ({id, date, datetime, datetimefin, deleteAnnee, updateAnnee}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [dateToUpdate, setDateToUpdate] = useState(date)
  const [datetimeToUpdate, setDatetimeToUpdate] = useState(datetime)
  const [datetimefinToUpdate, setDatetimefinToUpdate] = useState(datetimefin)
  const handleUpdateAnnee = () => {
    updateAnnee(id, dateToUpdate, datetimeToUpdate, datetimefinToUpdate)
    setUpdateMode(false)
    
  }
   console.log({id});
 const history = useHistory()
 const handleDetails = () => {
   history.push(`/annees/${id}`)
 }
    return (
      
        <div className="container">
           {/* {taskId && <Redirect to={`/tasks/${id}`} /> } */}
          {!updateMode ? (
             <>
             {/* <div onClick={handleDetails} className="link"> */}
            <div class="card">
            <Link to={`/annees/${id}`}>
            <h5 class="card-header">{date}</h5>
            </Link>
          {/* </div> */}
          
   
    <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => deleteAnnee(id)}>Delete</a>
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
            <h2>Modifier anneés universitaires</h2>
            <label for="date">Années universitaires</label>
    <input type="date" id="date" name="date" value={dateToUpdate} onChange={(e) => setDateToUpdate(e.target.value)} />
    <label for="date">Date début dépot PFE</label>
    <input type="datetime-local" id="datetime-local" name="date" value={datetimeToUpdate} onChange={(e) => setDatetimeToUpdate(e.target.value)} />
    <label for="date">Date fin dépot PFE</label>
    <input type="datetime-local" id="datetime-local" name="date" value={datetimefinToUpdate} onChange={(e) => setDatetimefinToUpdate(e.target.value)} />
          
          <button onClick={handleUpdateAnnee} className="myButton">Update </button>
        </div>
        </div>
        </div>
        </div>
          )}
        </div>
        
     
    );
  }


export default Annee;
