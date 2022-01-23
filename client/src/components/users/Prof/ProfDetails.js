import React, { useEffect, useState } from "react"
import { fetchEnsgtById } from "../../services/ensgts.service"
import { useParams, useLocation } from "react-router-dom"

function ProfDetails() {
  const [loading, setLoading] = useState(false)
  const [ensgt, setEnsgt] = useState({})
 
 
  const { ensgtId } = useParams()
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchEnsgtById(ensgtId)
      setEnsgt(result)
      setLoading(false)
    }
    fetchData()
  }, [ensgtId])

  return (
    <div className="container">
      
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
<div className="container">
      <br></br>
    
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Nom</h5>
    <p class="card-text">{ensgt.nom}</p>

          <h5 class="card-title">Prenom</h5>
    <p class="card-text">{ensgt.prenom}</p>

    <h5 class="card-title">Email</h5>
    <p class="card-text">{ensgt.email}</p>

    <h5 class="card-title">Cin</h5>
    <p class="card-text">{ensgt.cin}</p>

    <h5 class="card-title">Garade</h5>
    <p class="card-text">{ensgt.garade}</p>

    </div>
    
    </div></div>
    </>
    
      )}
    </div>
  )
}

export default ProfDetails
