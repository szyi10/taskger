import React from "react"

import classes from "./TaskItem.module.css"

const TaskItem = ({ task }) => {
  const removeHandler = (e) => {
    const selectedId = e.currentTarget.parentNode.id

    const storedTasks = JSON.parse(localStorage.tasks)

    for (let [i, task] of storedTasks.entries()) {
      if (task.id === selectedId) {
        storedTasks.splice(i, 1)
        localStorage.setItem("tasks", JSON.stringify(storedTasks))
        location.reload()
      }
    }
  }

  return (
    <li id={task.id} className={classes.item}>
      <p>{task.task}</p>
      <i className="fa-regular fa-trash-can" onClick={removeHandler}></i>
    </li>
  )
}

export default TaskItem
