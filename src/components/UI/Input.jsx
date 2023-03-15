import React from "react"

import classes from "./Input.module.css"

const Input = ({ task }) => {
  return (
    <input
      ref={task}
      type="text"
      className={classes.input}
      placeholder="New Task"
    />
  )
}

export default Input
