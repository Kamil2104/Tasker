import React from 'react'
import { useState, useRef } from 'react';

import axios from 'axios';

const AddTaskPanel = ({ validateAddingTask, login }) => {
    // useState's
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    // useRef's`
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

    const handleButtonAddTaskButton = () => {
        const inputNameCurrentValue = addTaskPanelNameRef.current.value
        const inputDescriptionCurrentValue = addTaskPanelDescriptionRef.current.value

        let addingResponse = validateAddingTask(inputNameCurrentValue, inputDescriptionCurrentValue);

        if (addingResponse === "") {
            const values = {
                user: login,
                name: addTaskPanelNameRef.current.value,
                description: addTaskPanelDescriptionRef.current.value,
                date: addTaskPanelDateRef.current.value,
                priority: addTaskPanelPriorityRef.current.value
            }

            axios.post('http://localhost:8081/addTask', values)
            .then(res => {
                if (res.data !== "Success") {
                    alert("Something went wrong. Try again.")
                } 
            })
            .catch(err => console.log(err))
        } else {
            alert(addingResponse)
        }
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
            />
            <input
                type="text"
                id="addTaskPanelInputDescription"
                name="addTaskPanelInputDescription"
                placeholder="Description: "
                autoComplete="off"
                ref={addTaskPanelDescriptionRef}
            />
            <input
                type="date"
                autoComplete="off"
                value={selectedDate}
                onChange={handleDateChange}
                min={getCurrentDate()}
                ref={addTaskPanelDateRef}
            />
            <select
                name="addTaskPanelSelectPriority"
                id="addTaskPanelSelectPriority"
                ref={addTaskPanelPriorityRef} >
                <option value="low"> low </option>
                <option value="medium"> medium </option>
                <option value="high"> high </option>
            </select>
            <button id="btnAddTask" onClick={handleButtonAddTaskButton}> Add </button>
            <button id="btnAddTaskPanelClearForm" onClick={handleInputtedValuesClear}> Clear </button>
        </div>
    )
}

export default AddTaskPanel