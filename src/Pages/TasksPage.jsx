import React from 'react'
import { useState, useRef } from 'react';

import '../Styles/TasksPageStyle.css'

const TasksPage = () => {
  // const name = "Ogarnąć mieszkanieaaaaaaaaaaaaaa";
  // const description = "Posprzątać całe mieszkanie i zetrzeć kurze";
  // const date = "14.12.2023";
  // const priority = "High";

  // useState's
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  // useRef's
  const addTaskPanelNameRef = useRef("");
  const addTaskPanelDescriptionRef = useRef("");
  const addTaskPanelDateRef = useRef(getCurrentDate());
  const addTaskPanelPriorityRef = useRef("low");

  const findTaskPanelNameRef = useRef("");
  const findTaskPanelDateRef = useRef(getCurrentDate());
  const findTaskPanelPriorityRef = useRef("low");

  // function's
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const handleInputtedValuesClear = (event) => {
    const clearButton = event.target;
    const clearButtonId = clearButton.id;

    if (clearButtonId === "btnAddTaskPanelClearForm") {
      addTaskPanelNameRef.current.value = "";
      addTaskPanelDescriptionRef.current.value = "";
      addTaskPanelDateRef.current.value = getCurrentDate();
      addTaskPanelPriorityRef.current.value = "low";
    } else if (clearButtonId === "btnFindTasksPanelClearForm") {
      findTaskPanelNameRef.current.value = "";
      findTaskPanelDateRef.current.value = getCurrentDate();
      findTaskPanelPriorityRef.current.value = "low";
    }
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='tasksPage'>
      <div className='leftPanel'>
        <div className='addTaskPanel'>

          <h1> Create task: </h1>
          <input 
            type="text" 
            id="addTaskPanelInputName" 
            name="addTaskPanelInputName" 
            placeholder="Name: " 
            autoComplete="off" 
            ref={addTaskPanelNameRef} 
          /> <br />
          <input 
            type="text" 
            id="addTaskPanelInputDescription" 
            name="addTaskPanelInputDescription" 
            placeholder="Description: " 
            autoComplete="off" 
            ref={addTaskPanelDescriptionRef} 
          /> <br />
          <input 
            type="date" 
            autoComplete="off" 
            value={selectedDate} 
            onChange={handleDateChange} 
            min={getCurrentDate()} 
            ref={addTaskPanelDateRef} 
          /> <br />
          <select 
            name="addTaskPanelSelectPriority" 
            id="addTaskPanelSelectPriority" 
            ref={addTaskPanelPriorityRef} >
              <option value="low"> low </option>
              <option value="medium"> medium </option>
              <option value="high"> high </option>
          </select> <br />
          <button id="btnAddTask"> Add </button>
          <button id="btnAddTaskPanelClearForm" onClick={handleInputtedValuesClear}> Clear </button>

        </div>
      </div>
      <div className='centerPanel'>
        <div className='orderTasksPanel'>

          <h1> Order by: </h1> <br />
          <select 
            name="selectOrderBy" 
            id="selectOrderBy">
              <option> Name </option>
              <option> Description </option>
              <option> Date </option>
              <option> Priority </option>
          </select>
          <select 
            name="selectOrderType" 
            id="selectOrderType">
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
        <input 
          type="text" 
          id="findTaskPanelInputName" 
          name="findTaskPanelInputName" 
          placeholder="Name: " 
          autoComplete="off" 
          ref={findTaskPanelNameRef} 
        /> <br />
        <input
            type="date" 
            autoComplete="off" 
            value={selectedDate} 
            onChange={handleDateChange} 
            min={getCurrentDate()} 
            ref={findTaskPanelDateRef} 
          /> <br />
        <select 
          name="findTasksPanelSelectPriority" 
          id="findTasksPanelSelectPriority" 
          ref={findTaskPanelPriorityRef} >
            <option value="low"> low </option>
            <option value="medium"> medium </option>
            <option value="high"> high </option>
        </select> <br />
        <button id="btnFindTasks"> Find </button>
        <button id="btnFindTasksPanelClearForm" onClick={handleInputtedValuesClear}> Clear </button>
        <button id="btnShowAllTasks"> Show all tasks </button>

      </div>
    </div>
  )
}

export default TasksPage