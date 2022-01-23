import Axios from 'axios'
  
  export const fetchAnnees = async () => {
    //await delay(1000)
    const result = await Axios.get('http://localhost:4000/api/annee/all')
    return result.data
  }
  
  export const fetchAnneeById = async (_id) => {
    //await delay(1000)
    const result = await Axios.get('http://localhost:4000/api/annee/'+_id)
    return result.data
  }
  
  export const addAnnee = async annee => {
    //await delay(1000)
    const result = await Axios.post('http://localhost:4000/api/annee/', annee)
    return result.data
  }
  
  export const deleteAnnee = async (_id) => {
    //await delay(1000)
    const result = await Axios.delete('http://localhost:4000/api/annee/'+_id)
    return result.data
  }
  
  export const updateAnnee = async (_id, annee) => {
    const result = await Axios.put('http://localhost:4000/api/annee/'+_id, annee)
  }
  