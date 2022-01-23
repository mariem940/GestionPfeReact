import React, { useState } from "react";

function AddAnnee ({ addAnnee}){

  const [date, setDate] = useState("")
  const [datetime, setDatetime] = useState("")
  const [datetimefin, setDatetimfin] = useState("")

  const handleAddAnnee = () => {
    addAnnee(date, datetime, datetimefin)
    setDate("")
    setDatetime("")
    setDatetimfin("")
    
  }

  return (
    <div className="container">
          <br></br>
         <div class="card">
       
         <div class="mb-3">
     <label for="date">Années universitaires</label>
    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </div>
    <div class="mb-3">
    <label for="datetime-local">Date début dépôt PFE</label>
    <input type="datetime-local" id="datetime-local" name="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
    </div>
    <div class="mb-3">
    <label for="datetime-local">Date fin dépôt PFE</label>
    <input type="datetime-local" id="datetime-local" name="datetimefin" value={datetimefin} onChange={(e) => setDatetimfin(e.target.value)} />
    </div>
      <div class="mb-3">
      <button type="submit" className="btn btn-primary btn-block" onClick={handleAddAnnee}>Button submit</button>
      </div>
  </div>
  </div>

  );
};

export default AddAnnee;




