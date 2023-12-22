import React from 'react'
import { useState, useRef } from 'react';

const FindTasksPanel = ({ validateFindingTasks }) => {
    // useState's
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    // useRef's
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

    const handleButtonFindTasks = () => {
        const inputNameCurrentValue = findTaskPanelNameRef.current.value

        let findingResponse = validateFindingTasks(inputNameCurrentValue);

        if (findingResponse === "") {
            // CODE USING DATABASE
        } else {
            alert(findingResponse)
        }
    }

    const handleInputtedValuesClear = (event) => {
        const clearButton = event.target;
        const clearButtonId = clearButton.id;

        if (clearButtonId === "btnFindTasksPanelClearForm") {
            findTaskPanelNameRef.current.value = "";
            findTaskPanelDateRef.current.value = getCurrentDate();
            findTaskPanelPriorityRef.current.value = "low";
        }
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className='findTasksPanel'>
            <h1> Find tasks: </h1>
            <div className='findTasksCriteriaContainer'>
                <div className='findTasksNameCriteria'>
                    <input
                        type="radio"
                        id="radioName"
                        name="radioFindBy"
                    />
                    <input
                        type="text"
                        id="findTaskPanelInputName"
                        name="findTaskPanelInputName"
                        placeholder="Name: "
                        autoComplete="off"
                        ref={findTaskPanelNameRef}
                    /> <br />
                </div>
                <div className='findTasksDateCriteria'>
                    <input
                        type="radio"
                        id="radioDate"
                        name="radioFindBy"
                    />
                    <input
                        type="date"
                        autoComplete="off"
                        value={selectedDate}
                        onChange={handleDateChange}
                        min={getCurrentDate()}
                        ref={findTaskPanelDateRef}
                    /> <br />
                </div>
                <div className='findTasksPriorityCriteria'>
                    <input
                        type="radio"
                        id="radioPriority"
                        name="radioFindBy"
                    />
                    <select
                        name="findTasksPanelSelectPriority"
                        id="findTasksPanelSelectPriority"
                        ref={findTaskPanelPriorityRef} >
                        <option value="low"> low </option>
                        <option value="medium"> medium </option>
                        <option value="high"> high </option>
                    </select> <br />
                </div>
            </div>
            <button id="btnFindTasks" onClick={handleButtonFindTasks}> Find </button>
            <button id="btnFindTasksPanelClearForm" onClick={handleInputtedValuesClear}> Clear </button>
            <button id="btnShowAllTasks"> Show all tasks </button>
        </div>
    )
}

export default FindTasksPanel