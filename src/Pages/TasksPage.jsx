import React from 'react'
import '../Styles/TasksPageStyle.css'

const TasksPage = () => {
  return (
    <div className='tasksPage'>
      <div className='addTaskPanel'>
        <h1> Create task: </h1>
        <input type="text" placeholder="Name: " autoComplete="off" /> <br />
        <input type="text" placeholder="Description: " autoComplete="off" /> <br />
        <input type="date" autoComplete="off" /> <br />
        <select name="selectPriority" id="selectPriority">
          <option value="low"> low </option>
          <option value="medium"> medium </option>
          <option value="high"> high </option>
        </select> <br />
        <button id="btnAddTask"> Add </button> <br />
        <button id="btnClearForm"> Clear </button> 
      </div>
      <div className='showTasksPanel'>

      </div>
      <div className='findTasksPanel'>

      </div>
    </div>
  )
}

export default TasksPage