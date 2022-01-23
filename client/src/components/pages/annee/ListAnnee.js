import React from "react"
import Annee from "./Annee"


export default function ListAnnee({ annees, deleteAnnee, updateAnnee }) {
  return (
    <div >
      <div>
        {annees.map( annee => {
          return (
          <Annee
            key={annee.id}
            id={annee._id}
            date={annee.date}
            datetime={annee.datetime}
            datetimefin={annee.datetimefin}
            deleteAnnee={deleteAnnee}
            updateAnnee={updateAnnee}
          />
          )
})}
      </div>
    </div>
  )
}
