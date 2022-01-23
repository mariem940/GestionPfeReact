import React, { useEffect, useState } from "react"
import { fetchEtudinatById } from "../../services/etudt.service"
import { useParams, useLocation } from "react-router-dom"


function EtudtDetails() {
  const [loading, setLoading] = useState(false)
  const [etudiant, setEtudiant] = useState({})
 
 
  const { etudiantId } = useParams()
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchEtudinatById(etudiantId)
      setEtudiant(result)
      setLoading(false)
    }
    fetchData()
  }, [etudiantId])

  return (
    <div className="task-details">
     
      
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <div className="container">
      <br></br>
    <div class="card">
  <h5 class="card-header">{etudiant.nomutilisateur}</h5>
  <div class="card-body">
    <h5 class="card-title">Email</h5>
    <p class="card-text">{etudiant.email}</p>
    <h5 class="card-title">CIN</h5>
    <p class="card-text">{etudiant.cin}</p>
    <h5 class="card-title">Num carte</h5>
    <p class="card-text">{etudiant.numcarte}</p>
    
  </div>
</div>
</div>
        </>
      )}
    </div>
  )
}

export default EtudtDetails
