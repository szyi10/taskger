import React, { useState, useEffect, useRef } from "react"

import CardHeader from "./CardHeader"
import Button from "../UI/Button"
import TasksList from "../Tasks/TasksList"
import Input from "../UI/Input"

import classes from "./Card.module.css"

const Card = () => {
  const [newTask, setNewTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const taskRef = useRef()

  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", "[]")
    }

    const items = JSON.parse(localStorage.tasks)

    if (!items) {
      setNewTask(true)
    } else {
      setTasks(items)
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    const currentValue = taskRef.current.value
    const randomId =
      currentValue.substring(0, 1) +
      Math.floor(Math.random() * 99) +
      currentValue.substring(1, 2)

    if (currentValue.length === 0) {
      return
    }

    let storedTasks = JSON.parse(localStorage.tasks)

    storedTasks[storedTasks.length] = {
      id: randomId,
      task: currentValue,
    }
    localStorage.setItem("tasks", JSON.stringify(storedTasks))

    setNewTask(false)
    location.reload()
  }

  return (
    <section className={classes.card}>
      <CardHeader amount={tasks.length} />
      <div>
        {!newTask && (
          <Button text="New Task" onClick={() => setNewTask(true)} />
        )}
        {newTask && (
          <form className={classes.new} onSubmit={submitHandler}>
            <Input task={taskRef} />
            <Button text="Add Task" />
          </form>
        )}
      </div>
      <TasksList tasks={tasks} />
    </section>
  )
}

export default Card
