import React from "react"
import Cahier from "./Cahier"


export default function TasksList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="tasks-list">
      <div>
        {tasks.map((task) => (
          <Cahier
            key={task.id}
            id={task._id}
            title={task.title}
            description={task.description}
            definition={task.definition}
            objectifs={task.objectifs}
            consignes={task.consignes}
            techniques={task.techniques}
            user_id={task.user_id.nomutilisateur}
            deleteTask={deleteTask}
            updateTask={updateTask}
           
          />
        ))}
      </div>
    </div>
  )
}
