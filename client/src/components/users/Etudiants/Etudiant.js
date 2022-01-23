import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useHistory, Redirect } from "react-router-dom"

function Etudiant ({id, nomutilisateur, email, cin, numcarte, password, deleteEtud, updateEtud}) {
    const [updateMode, setUpdateMode] = useState(false)
        const [nomutilisateurToUpdate, setNomutilisateurToUpdate] = useState(nomutilisateur)
        const [emailToUpdate, setEmailToUpdate] = useState(email)
        const [cinToUpdate, setCinToUpdate] = useState(cin)
        const [numcarteToUpdate, setNumcatreToUpdate] = useState(numcarte)
        const [passwordToUpdate, setPasswordToUpdate] = useState(password)
        const handleUpdateEnsgt = () => {
            updateEtud(id, nomutilisateurToUpdate, emailToUpdate, cinToUpdate, numcarteToUpdate, passwordToUpdate)
          setUpdateMode(false)
        }

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
            <Link to={`/etudiants/${id}`}>
            <h5 class="card-header">{nomutilisateur}</h5>
            </Link>
          {/* </div> */}
            <div class="card-body">
              <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => deleteEtud(id)}>Delete</a>
    </div>
    <div class="col">
    <a href="#" class="btn btn-primary" onClick={() => setUpdateMode(true)}>Update</a>
    </div>
              </div>
              </div>
              </>
              ) : (

<div className="container">
<br></br>
<div className="w-75 mx-auto shadow p-5">
<h2 className="text-center mb-4">Edit Etudiants</h2>

<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Entrer Votre nom"
name="nomutilisateur"
value={nomutilisateurToUpdate}
onChange={(e) => setNomutilisateurToUpdate(e.target.value)}
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
name="numcarte"
value={numcarteToUpdate}
onChange={(e) => setNumcatreToUpdate(e.target.value)}
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
export default Etudiant