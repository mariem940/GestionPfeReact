  import Axios from "axios"
  
  
 // function delay(ms) {
   // return new Promise((resolve) => setTimeout(resolve, ms))
  //}
  

  
  export const addEtudiant = async etudiant => {
    const result = await Axios.post('http://localhost:4000/api/etudiant/', etudiant)
    return result.data
  }
  
  export const deleteEtud = async (_id) => {
    //await delay(1000)
    const result = await Axios.delete('http://localhost:4000/api/etudiant/'+_id)
    return result.data
  }
  
  export const updateEtud = async (_id, etudiant) => {
    //await delay(1000)
    const result = await Axios.put('http://localhost:4000/api/etudiant/'+_id, etudiant)
    
  }
  
  
export const fetchEtudinatById=async(_id)=>{
  const result = await Axios.get(
    "http://localhost:4000/api/etudiant/"+_id
  )
 //  console.log('result: ', result);
  return result.data
}

export const fetchEtudinat = async () => {
 // await delay(500)
 const result = await Axios.get(
   "http://localhost:4000/api/etudiant/all", 
 )
   return result.data

}