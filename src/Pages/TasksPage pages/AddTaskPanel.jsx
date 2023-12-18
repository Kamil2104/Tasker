import React from 'react'
import { useState, useRef } from 'react';

const AddTaskPanel = () => {
    // useState's
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    // useRef's
    const addTaskPanelNameRef = useRef("");
    const addTaskPanelDescriptionRef = useRef("");
    const addTaskPanelDateRef = useRef(getCurrentDate());
    const addTaskPanelPriorityRef = useRef("low");

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
        }
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
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
    )
}

export default AddTaskPanel