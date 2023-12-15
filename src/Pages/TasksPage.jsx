import React from 'react'
import { useState } from 'react';

import '../Styles/TasksPageStyle.css'

const TasksPage = () => {
  // const name = "Ogarnąć mieszkanieaaaaaaaaaaaaaa";
  // const description = "Posprzątać całe mieszkanie i zetrzeć kurze";
  // const date = "14.12.2023";
  // const priority = "High";

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='tasksPage'>
      <div className='addTaskPanel'>

        <h1> Create task: </h1>
        <input type="text" placeholder="Name: " autoComplete="off" /> <br />
        <input type="text" placeholder="Description: " autoComplete="off" /> <br />
        <input type="date" autoComplete="off" value={selectedDate} onChange={handleDateChange} min={getCurrentDate()} /> <br />
        <select name="selectPriority" id="selectPriority">
          <option value="low"> low </option>
          <option value="medium"> medium </option>
          <option value="high"> high </option>
        </select> <br />
        <button id="btnAddTask"> Add </button>
        <button id="btnClearForm"> Clear </button>

      </div>
      <div className='centerPanel'>
        <div className='orderTasksPanel'>

          <h1> Order by: </h1> <br />
          <select>
            <option> Name </option>
            <option> Description </option>
            <option> Date </option>
            <option> Priority </option>
          </select>
          <select>
            <option> ASC </option>
            <option> DESC </option>
          </select>
          <button id="setOrder"> Set </button>

        </div>
        <div className='showTasksPanel'>

          {/* <textarea spellCheck="false" value={`ADKLJKALJDS: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} /> */}

          {/* <h1> No tasks available. </h1> */}

        </div>
      </div>

      <div className='findTasksPanel'>

        <h1> Find tasks: </h1>
        <input type="text" placeholder="Name: " autoComplete="off" /> <br />
        <input
          type="date" autoComplete="off" value={selectedDate} onChange={handleDateChange} min={getCurrentDate()} /> <br />
        <select name="selectPriority" id="selectPriority">
          <option value="low"> low </option>
          <option value="medium"> medium </option>
          <option value="high"> high </option>
        </select> <br />
        <button id="btnFindTasks"> Find </button>
        <button id="btnClearForm"> Clear </button>
        <button id="btnShowAllTasks"> Show all tasks </button>

      </div>
    </div>
  )
}

export default TasksPage