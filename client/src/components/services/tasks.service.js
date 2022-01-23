import Axios from "axios"
  
  
 // function delay(ms) {
   // return new Promise((resolve) => setTimeout(resolve, ms))
  //}
  

  
  export const addTask = async task => {
    const result = await Axios.post('http://localhost:4000/api/cahier/', task)
    return result.data
  }
  
  export const deleteTask = async (_id) => {
    //await delay(1000)
    const result = await Axios.delete('http://localhost:4000/api/cahier/'+_id)
    return result.data
  }
  
  export const updateTask = async (_id, task) => {
    //await delay(1000)
    const result = await Axios.put('http://localhost:4000/api/cahier/'+_id, task)
    
  }
  
  
export const fetchTaskById=async(_id)=>{
  const result = await Axios.get(
    "http://localhost:4000/api/cahier/cahier/"+_id
  )
 //  console.log('result: ', result);
  return result.data
}

export const fetchTasks = async () => {
 // await delay(500)
 const result = await Axios.get(
   "http://localhost:4000/api/cahier/all", 
 )
   return result.data

}