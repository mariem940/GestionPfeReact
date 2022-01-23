import React, { useState, useEffect } from "react"

import AddAnnee from "./AddAnnee"
import ListAnnee from "./ListAnnee"
import {

  fetchAnnees,
  fetchAnneesByFilter,
  addAnnee as addAnneeFromService,
  deleteAnnee as deleteAnneeFromService,
  updateAnnee as updateAnneeFromService,
} from "../../services/annee.service"

function ViewAnnee() {
  const [loading, setLoading] = useState(false)
  const [annees, setAnnees] = useState([])
  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // 2ème forme de useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await fetchAnnees()
        setAnnees(result)
        setLoading(false)
      } catch (e) {
        console.log("error")
        setLoading(false)
      }
    }
    console.log("useEffect")
    fetchData()
  }, [])

    const addAnnee = async (date, datetime, datetimefin) => {
    try {
      setLoading(true)
      const newAnnee = await addAnneeFromService({
        date, datetime, datetimefin
      })
      setAnnees([...annees, newAnnee])
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  const deleteAnnee = async (id) => {
    try {
      setLoading(true)
      await deleteAnneeFromService(id)
      const newAnnees = annees.filter((annee) => annee.id !== id)
      setAnnees(newAnnees)
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }

  const updateAnnee = async (id, date, datetime, datetimefin) => {
    try {
      setLoading(true)
      const newAnnee = await updateAnneeFromService(id, {
        date, datetime, datetimefin
      })
      const newAnnees = annees.map((annee) => (annee.id === id ? newAnnee : annee))
      setAnnees(newAnnees)
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }

  return (
    <div className="list-view">
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      <div>
        <div>
          <AddAnnee addAnnee={addAnnee} />

          {loading && <div>Loading ... </div>}
          {!loading && isVisible && (
            <ListAnnee
              annees={annees}
              deleteAnnee={deleteAnnee}
              updateAnnee={updateAnnee}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewAnnee
