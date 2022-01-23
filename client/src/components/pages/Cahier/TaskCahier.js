import React, { useState } from "react"
import ViewCahier from "./ViewCahier"
import { connect } from 'react-redux';
function TaskCahier({ addTask, etudiant, isAuth, isLoading}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [definition, setDefinition] = useState("")
  const [objectifs, setObjectifs] = useState("")
  const [consignes, setConsignes] = useState("")
  const [techniques, setTechniques] = useState("")

  if (etudiant) {
    const {_id} = etudiant
    console.log(_id)}
    console.log(etudiant)
  const handleAddTask = () => {
    if (etudiant) {
      const {_id} = etudiant
      console.log(_id)
    addTask(title, description, definition, objectifs, consignes, techniques, _id)
    setTitle("")
    setDescription("")
    setDefinition("")
    setObjectifs("")
    setConsignes("")
    setTechniques("")
  }
}

  return (
    <div className="container">
      <div className="py-4">
        <div>
          <div class="form-group">
            <h2>Remplir votre cahier</h2>
        <label htmlFor="titre">Titre de projet</label>
          <input type="text"  name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="écrivez le titre de votre projet" className="formField" />
          <label htmlFor="description">La description générale du projet</label>
          <input type="text"  name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="écrivez la description de votre projet" className="formField" />
          <label htmlFor="definition">La définition globale du projet</label>
          <input type="text"  name="definition" value={definition} onChange={(e) => setDefinition(e.target.value)} placeholder="écrivez la définition globale de votre projet" className="formField" />
          <label htmlFor="objectifs">Les objectifs</label>
          <input type="text"  name="objectifs" value={objectifs} onChange={(e) => setObjectifs(e.target.value)} placeholder="écrivez les objectifs de votre projet" className="formField" />
          <label htmlFor="consignes">Les consignes d'acquisition</label>
          <input type="text"  name="consignes" value={consignes} onChange={(e) => setConsignes(e.target.value)} placeholder="écrivez les consignes d'acquisition de votre projet" className="formField" />
          <label htmlFor="techniques">Les spécifications techniques</label>
          <input type="text"  name="techniques" value={techniques} onChange={(e) => setTechniques(e.target.value)} placeholder="écrivez votre spécifications techniques" className="formField" />
          <button onClick={handleAddTask} className="myButton">submit </button>
        </div>
        </div>
        </div>
        </div>
  )
}


const mapToStateProps = (state) => ({
  isAuth: state.authetud.isAuthenticated,
  isLoading: state.authetud.loading,
  etudiant: state.authetud.etudiant,
});
export default connect(mapToStateProps, )(TaskCahier);

