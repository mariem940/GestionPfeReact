import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory, Redirect } from "react-router-dom"
import { updateEnseignant } from '../../services/ensgts.service';

function Enseignants ({id, nom, prenom, email, cin, garade, password, updateEnsgt}) {
    const [updateMode, setUpdateMode] = useState(false)
    const [nomToUpdate, setNomToUpdate] = useState(nom)
    const [prenomToUpdate, setPrenomToUpdate] = useState(prenom)
    const [emailToUpdate, setEmailToUpdate] = useState(email)
    const [cinToUpdate, setCinToUpdate] = useState(cin)
    const [garadeToUpdate, setGaradeToUpdate] = useState(garade)
    const [passwordToUpdate, setPasswordToUpdate] = useState(password)
    const handleUpdateEnsgt = () => {
        updateEnseignant(id, nomToUpdate, prenomToUpdate, emailToUpdate, cinToUpdate, garadeToUpdate, passwordToUpdate)
      setUpdateMode(false)
    }
    const history = useHistory()
    const handleDetails = () => {
      history.push(`/ensgts/${id}`)
    }
    return (
      
        <div className="container">
           {/* {ensgtId && <Redirect to={`/ensgts/${id}`} /> } */}
             {!updateMode ? (
                <>
                {/* <div onClick={handleDetails} className="link"> */}
                
            <div class="card">
            <Link to={`/ensgts/${id}`}>
            <h5 class="card-header">{nom}</h5>
            </Link>
          {/* </div> */}
            
        
    <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => setUpdateMode(true)}>Update</a>
    </div>
              </div>
             
             
              </>
              ) : (

                <div className="container">
      <br></br>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Enseignants</h2>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre nom"
              name="nom"
              value={nomToUpdate}
              onChange={(e) => setNomToUpdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Prenom"
              name="prenom"
              value={prenomToUpdate}
              onChange={(e) => setPrenomToUpdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Entrer Votre E-mail "
              name="email"
              value={emailToUpdate}
              onChange={(e) => setEmailToUpdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre CIN"
              name="cin"
              value={cinToUpdate}
              onChange={(e) => setCinToUpdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Entrer Votre Garade"
              name="garade"
              value={garadeToUpdate}
              onChange={(e) => setGaradeToUpdate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Entrer Votre password"
              name="password"
              value={passwordToUpdate}
              onChange={(e) => setPasswordToUpdate(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={handleUpdateEnsgt}>Ajouter</button>
     
      </div>
      
    </div>
    )}
</div>
          );
}
export default Enseignants