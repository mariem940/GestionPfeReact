
  import Axios from "axios"

  
  export const fetchEnsgtById=async(_id)=>{
    const result = await Axios.get(
      "http://localhost:4000/api/enseignant/"+_id
    )
   //  console.log('result: ', result);
    return result.data
  }
  

  
  export const addEnseignant = async enseignant => {
    const result = await Axios.post('http://localhost:4000/api/enseignant/', enseignant)
    return result.data
  }
  
  export const deletedEnseignant = async (_id) => {
    //await delay(1000)
    const result = await Axios.delete('http://localhost:4000/api/enseignant/'+_id)
    return result.data
  }
  
  export const updateEnseignant = async (_id, enseignant) => {
    //await delay(1000)
    const result = await Axios.put('http://localhost:4000/api/enseignant/'+_id, enseignant)
    
  }
  


export const fetchEnseignant = async () => {
 // await delay(500)
 const result = await Axios.get(
   "http://localhost:4000/api/enseignant/all", 
 )
   return result.data

}
  