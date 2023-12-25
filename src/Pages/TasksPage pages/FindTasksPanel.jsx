import React from 'react'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FindTasksPanel = ({ validateFindingTasks, login }) => {

    const navigate = useNavigate()

    // useState's
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());
    const [selectedRadioButton, selSelectedRadioButton] = useState("")

    // useRef's
    const findTaskPanelNameRef = useRef("");
    const findTaskPanelDateRef = useRef(getCurrentDate());
    const findTaskPanelPriorityRef = useRef("low");

    const radioButtonNameRef = useState(false)
    const radioButtonDateRef = useState(false)
    const radioButtonPriorityRef = useState(false)

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

        if (selectedRadioButton !== "") {
            if (selectedRadioButton === "findingByName") {
                let findingResponse = validateFindingTasks(inputNameCurrentValue);

                if (findingResponse !== "") {
                    alert(findingResponse)
                } else {
                    console.log("NAME")
                }
            } else if (selectedRadioButton === "findingByDate") {
                console.log("DATE")
            } else if (selectedRadioButton === "findingByPriority") {
                console.log("PRIORITY")
            }
        } else {
            alert("You need to select a search option.")
        }
    }

    const handleInputtedValuesClear = (event) => {
        const clearButton = event.target;
        const clearButtonId = clearButton.id;

        if (clearButtonId === "btnFindTasksPanelClearForm") {
            findTaskPanelNameRef.current.value = "";
            findTaskPanelDateRef.current.value = getCurrentDate();
            findTaskPanelPriorityRef.current.value = "low";

            selSelectedRadioButton("")

            if (radioButtonNameRef.current) radioButtonNameRef.current.checked = false;
            if (radioButtonDateRef.current) radioButtonDateRef.current.checked = false;
            if (radioButtonPriorityRef.current) radioButtonPriorityRef.current.checked = false;
        }
    }

    const handleButtonShowAllTasks = () => {
        console.log("ALL TASKS")
    }

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleRadioButtonChange = () => {
        if (radioButtonNameRef.current.checked) {
            selSelectedRadioButton("findingByName")
        } else if (radioButtonDateRef.current.checked) {
            selSelectedRadioButton("findingByDate")
        } else if (radioButtonPriorityRef.current.checked) {
            selSelectedRadioButton("findingByPriority")
        }
    }

    const handleButtonLogOut = () => {
        navigate('/')
    }

    return (
        <div className='findTasksPanel'>
            <div className='findTasksPanelHeaderContainer'>
                <h1> Find tasks: </h1>
            </div>
            <div className='findTasksCriteriaContainer'>
                <div className='findTasksNameCriteria'>
                    <input
                        type="radio"
                        id="radioName"
                        name="radioFindBy"
                        onChange={handleRadioButtonChange}
                        ref={(el) => (radioButtonNameRef.current = el)}
                    />
                    <input
                        type="text"
                        id="findTaskPanelInputName"
                        name="findTaskPanelInputName"
                        placeholder="Name: "
                        autoComplete="off"
                        ref={findTaskPanelNameRef}
                    />
                </div>
                <div className='findTasksDateCriteria'>
                    <input
                        type="radio"
                        id="radioDate"
                        name="radioFindBy"
                        onChange={handleRadioButtonChange}
                        ref={(el) => (radioButtonDateRef.current = el)}
                    />
                    <input
                        type="date"
                        autoComplete="off"
                        value={selectedDate}
                        onChange={handleDateChange}
                        min={getCurrentDate()}
                        ref={findTaskPanelDateRef}
                    />
                </div>
                <div className='findTasksPriorityCriteria'>
                    <input
                        type="radio"
                        id="radioPriority"
                        name="radioFindBy"
                        onChange={handleRadioButtonChange}
                        ref={(el) => (radioButtonPriorityRef.current = el)}
                    />
                    <select
                        name="findTasksPanelSelectPriority"
                        id="findTasksPanelSelectPriority"
                        ref={findTaskPanelPriorityRef} >
                        <option value="low"> low </option>
                        <option value="medium"> medium </option>
                        <option value="high"> high </option>
                    </select>
                </div>
                <div className='rowDisplayedButtons'>
                    <button id="btnFindTasks" onClick={handleButtonFindTasks}> Find </button>
                    <button id="btnFindTasksPanelClearForm" onClick={handleInputtedValuesClear}> Clear </button>
                </div>
                <button id="btnShowAllTasks" onClick={handleButtonShowAllTasks}> Show all tasks </button>
            </div>
            <div className='logOutButtonContainer'>
                <button id="btnLogOut" onClick={handleButtonLogOut}> Log out </button>
            </div>
        </div>
    )
}

export default FindTasksPanel