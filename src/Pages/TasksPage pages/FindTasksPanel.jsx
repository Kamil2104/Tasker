import React from 'react'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const FindTasksPanel = ({ validateFindingTasks, login, handleFindTasks }) => {

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

    const handleButthandleFindTasks = () => {
        const inputNameCurrentValue = findTaskPanelNameRef.current.value

        if (selectedRadioButton !== "") {
            if (selectedRadioButton === "findingByName") {
                let findingResponse = validateFindingTasks(inputNameCurrentValue);

                if (findingResponse !== "") {
                    alert(findingResponse)
                } else {
                    const values = {
                        user: login,
                        name: findTaskPanelNameRef.current.value
                    }

                    axios.post('http://localhost:8081/findTaskByName', values)
                        .then(res => {
                            if (res.data === "No tasks found") {
                                alert("No tasks found")
                            } else {
                                handleFindTasks(res.data);
                            }
                        })
                        .catch(err => console.log(err))
                }
            } else if (selectedRadioButton === "findingByDate") {
                const values = {
                    user: login,
                    date: findTaskPanelDateRef.current.value
                }

                axios.post('http://localhost:8081/findTaskByDate', values)
                    .then(res => {
                        if (res.data === "No tasks found") {
                            alert("No tasks found")
                        } else {
                            handleFindTasks(res.data);
                        }
                    })
                    .catch(err => console.log(err))

            } else if (selectedRadioButton === "findingByPriority") {
                const values = {
                    user: login,
                    priority: findTaskPanelPriorityRef.current.value
                }
                axios.post('http://localhost:8081/findTaskByPriority', values)
                    .then(res => {
                        if (res.data === "No tasks found") {
                            alert("No tasks found")
                        } else {
                            handleFindTasks(res.data);
                        }
                    })
                    .catch(err => console.log(err))
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
        const values = {
            user: login
        }

        axios.post('http://localhost:8081/showTasks', values)
        .then(res => {
            if (res.data === "No tasks") {
                handleFindTasks(["No tasks available."]);
            } else if (res.data === "Error!") {
                alert("Something went wrong with showing the tasks.");
            } else {
                handleFindTasks(res.data);
            }
        })
        .catch(err => console.log(err))
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
                    <button id="btnFindTasks" onClick={handleButthandleFindTasks}> Find </button>
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