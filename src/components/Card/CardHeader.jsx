import React from "react"

import classes from "./CardHeader.module.css"

const CardHeader = ({ amount }) => {
  return (
    <div className={classes.header}>
      <h1>Tasks</h1>
      <p>You have {amount} tasks to do!</p>
    </div>
  )
}

export default CardHeader
