
import React, { useState, useEffect } from "react"
import Enseignants from "./Enseignants"
import {

  fetchEnsgtById,
  deletedEnseignant as deleteEnseignantFromService,
  updateEnseignant as updateEnseignantFromService,
  fetchEnseignant,
} from "../../services/ensgts.service"
import Prof from "./Prof"


function ViewEnseignants() {
  const [loading, setLoading] = useState(false)
    const [enseignants
      , setEnseignants] = useState("")
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
          try {
            const result = await fetchEnsgtById()
            setEnseignants(result)
            setLoading(false)
          } catch (e) {
            console.log("error")
            setLoading(false)
          }
        }
        console.log("useEffect")
        fetchData()
      }, [])
     
      const deleteEnseignant = async (id) => {
        try {
          setLoading(true)
          await deleteEnseignantFromService(id)
          const newEnsgts = enseignants.filter((enseignant) => enseignant.id !== id)
          setEnseignants(newEnsgts)
          setLoading(false)
        } catch (e) {
          console.log("error")
        }
      }
    
      const updateEnseignant  = async (id, nom, prenom, email, cin, garade, password) => {
        try {
          setLoading(true)
          const newEnsgt = await updateEnseignantFromService(id, {
            nom, prenom, email, cin, garade, password
          })
          const newEnsgts = enseignants.map((enseignant) => (enseignant.id === id ? newEnsgts : enseignant))
          setEnseignants(newEnsgts)
          setLoading(false)
        } catch (e) {
          console.log("error")
        }
      }
    


      return (
        <div >
          
          <div>
            
              <div>
          
                <Prof enseignants={enseignants} deleteEnseignant={deleteEnseignant} updateEnseignant={updateEnseignant} />
                
              </div>
          
          </div>
        </div>
      )
}

export default ViewEnseignants