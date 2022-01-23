import React from "react"
import { updateEnseignant } from "../../services/ensgts.service"
import Enseignants from "./Enseignants"
export default function Prof({ enseignants, deletedEnseignant, updateEnseignant }) {
    return (
      <div >
        <div>
          {enseignants.map((enseignant) => (
            <Enseignants
              key={enseignant.id}
              id={enseignant.id}
              nom={enseignant.nom}
              prenom={enseignant.prenom}
              email={enseignant.email}
              cin={enseignant.cin}
              garade={enseignant.garade}
              password={enseignant.password}
              deletedEnseignant={deletedEnseignant}
              updateEnsgteignant={updateEnseignant}
              
             
             
            />
          ))}
        </div>
      </div>
    )
  }
  