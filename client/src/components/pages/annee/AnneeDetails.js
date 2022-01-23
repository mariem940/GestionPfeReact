import React, { useEffect, useState } from "react"
import { fetchAnneeById } from "../../services/annee.service"
import { useParams, useLocation } from "react-router-dom"


function AnneeDetails() {
  const [loading, setLoading] = useState(false)
  const [annee, setAnnee] = useState({})
 
 
  const { anneeId } = useParams()
  console.log('useParams(): ', useParams());
  console.log('useLocation(): ', useLocation());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchAnneeById(anneeId)
      setAnnee(result)
      setLoading(false)
    }
    fetchData()
  }, [anneeId])

  return (
    <div >
     
      
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
      <div className="container">
      <br></br>
    <div class="card">
  <h5 class="card-header">{annee.date}</h5>
  <div class="card-body">
    <h5 class="card-title">Date début dépot PFE </h5>
    <p class="card-text">{annee.datetime}</p>
    <h5 class="card-title">Date fin dépot PFE</h5>
    <p class="card-text">{annee.datetimefin}</p>
    
  </div>
</div>
</div>
        </>
      )}
    </div>
  )
}

export default AnneeDetails
