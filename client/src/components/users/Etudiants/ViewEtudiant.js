import React, { useState } from "react"
import AddEtudiant from "./AddEtudiant"

import ListEtudiants from "./ListEtudiants"


function ViewEtudiant() {

    const [etudiants, setEtudiants] = useState([
        {
            id: "1",
            nomutilisateur: "Cahier 1",
            email: "Definition cahier 1",
            cin: "objectifs cahier 1",
            numcarte: "consignes cahier 1",
            password: "techniques cahier 1",
          },
          {
            id: "2",
            nomutilisateur: "Cahier 2",
            password: "Definition cahier 2",
            cin: "objectifs cahier 2",
            numcarte: "consignes cahier 2",
            password: "techniques cahier 2",
          },
          
      ])

      const updateEtud = (id, nomutilisateur, email, cin, numcarte, password) => {
        const newEtud = etudiants.map((etudiant) =>
          etudiant.id === id ? { id, nomutilisateur, email, cin, numcarte, password } : etudiant
        )
        setEtudiants(newEtud)
      }

      const deleteEtud = (id) => {
        const newEtud = etudiants.filter((etudiant) => etudiant.id !== id)
        setEtudiants(newEtud)
      }
      const addEtudiant = (nomutilisateur, email, cin, numcarte, password) => {
        setEtudiants([...etudiants, { id: etudiants.length+1, nomutilisateur, email, cin, numcarte, password }])
      }



      return (
        <div >
          
          <div>
            
              <div>
                <AddEtudiant addEtudiant={addEtudiant} />
                <ListEtudiants etudiants={etudiants} deleteEtud={deleteEtud} updateEtud={updateEtud} />
                
              </div>
          
          </div>
        </div>
      )
}

export default ViewEtudiant