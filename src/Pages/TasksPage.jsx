import React from 'react'
import { useState } from 'react';

import '../Styles/TasksPageStyle.css'

const TasksPage = () => {
  const name = "Ogarnąć mieszkanieaaaaaaaaaaaaaa";
  const description = "Posprzątać całe mieszkanie i zetrzeć kurze";
  const date = "14.12.2023";
  const priority = "High";

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
      <div className='showTasksPanel'>

          <textarea spellCheck="false" value={`ADKLJKALJDS: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
          <textarea spellCheck="false" value={`Name: ${name}\n\nDescription: ${description}\n\nDate: ${date}\n\nPriority: ${priority}`} />
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
        <button id="btnFindTasks"> Add </button>
        <button id="btnClearForm"> Clear </button>

      </div>
    </div>
  )
}

export default TasksPage