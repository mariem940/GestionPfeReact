import React from "react"
import Etudiant from "./Etudiant"
export default function ListEtudiants({ etudiants, deleteEtud, updateEtud }) {
    return (
      <div >
        <div>
          {etudiants.map((etudiant) => (
            <Etudiant
              key={etudiant.id}
              id={etudiant.id}
              nomutilisateur={etudiant.nomutilisateur}
              email={etudiant.email}
              cin={etudiant.cin}
              numcarte={etudiant.numcarte}
              password={etudiant.password}
              deleteEtud={deleteEtud}
              updateEtud={updateEtud}
              
             
             
            />
          ))}
        </div>
      </div>
    )
  }
  