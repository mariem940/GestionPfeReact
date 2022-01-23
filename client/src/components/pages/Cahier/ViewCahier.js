import React, { useState, useEffect } from "react"

import TaskCahier from "./TaskCahier"
import Tasks from "./Tasks"
import {

  fetchTasks,
  fetchTasksByFilter,
  addTask as addTaskFromService,
  deleteTask as deleteTaskFromService,
  updateTask as updateTaskFromService,
} from "../../services/tasks.service"

function ViewChaier() {
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState([])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // 2ème forme de useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await fetchTasks()
        setTasks(result)
        setLoading(false)
      } catch (e) {
        console.log("error")
        setLoading(false)
      }
    }
    console.log("useEffect")
    fetchData()
  }, [])

    const addTask = async (title, description, definition, objectifs, consignes, techniques, user_id) => {
    try {
      setLoading(true)
      const newTask = await addTaskFromService({
        title,
         description, definition, objectifs, consignes, techniques, user_id
      })
      setTasks([...tasks, newTask])
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  const deleteTask = async (id) => {
    try {
      setLoading(true)
      await deleteTaskFromService(id)
      const newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }

  const updateTask = async (id, title, description, definition, objectifs, consignes, techniques) => {
    try {
      setLoading(true)
      const newTask = await updateTaskFromService(id, {
        title,
      description, definition, objectifs, consignes, techniques
      })
      const newTasks = tasks.map((task) => (task.id === id ? newTask : task))
      setTasks(newTasks)
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
          <TaskCahier addTask={addTask} />

          {loading && <div>Loading ... </div>}
          {!loading && isVisible && (
            <Tasks
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewChaier
