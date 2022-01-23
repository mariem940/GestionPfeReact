import Axios from "axios"
  

export const fetchValidations = async () => {
 // await delay(500)
 const result = await Axios.get(
   "http://localhost:4000/api/validation/all", 
 )
   return result.data

}
export const fetchValidationsParProf = async (id) => {
  const result = await Axios.get(`http://localhost:4000/api/validation/enseignant/`+id);
    return result.data
}
export const addValidation = async validation => {
  const result = await Axios.post('http://localhost:4000/api/validation/', validation)
  return result.data
}