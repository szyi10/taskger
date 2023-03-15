import React from "react"

import TaskItem from "./TaskItem"

import classes from "./TasksList.module.css"

const TasksList = ({ tasks }) => {
  return (
    <ul className={classes.tasks}>
      {tasks.map((task, idx) => {
        return <TaskItem key={idx} task={task} />
      })}
    </ul>
  )
}

export default TasksList
