import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment';

const ShowTasksPanel = ({ login }) => {
    const noTasksHeader = "No tasks available.";
    const [tasks, setTasks] = useState([]);

    const navigate = useNavigate()

    let tasksRes = {

    }

    useEffect(() => {
        const values = {
            user: login
        };

        axios.post('http://localhost:8081/showTasks', values)
            .then(res => {
                if (res.data === "No tasks") {
                    setTasks([noTasksHeader]);
                } else if (res.data === "Error!") {
                    alert("Something went wrong with showing the tasks.");
                } else {
                    tasksRes = res.data

                    const formattedTasks = tasksRes.map(task => (
                        Object.entries(task).map(([key, value]) => (
                            key === 'Date' ? `${key}: ${moment(value).format('YYYY-MM-DD')}` : `${key}: ${value}`
                        )).join('\n')
                    ));

                    setTasks(formattedTasks);
                }
            })
            .catch(err => console.log(err));
    }, [login]);

    const handleButtonDeleteTask = (event) => {
        const textareaIndex = event.target.id;
        const textareaContent = tasks[textareaIndex];

        try {
            const taskObject = parseTaskContent(textareaContent);

            const values = {
                user: login,
                name: taskObject.Name,
                description: taskObject.Description,
                date: taskObject.Date,
                priority: taskObject.Priority
            }

            axios.post('http://localhost:8081/deleteTask', values)
                .then(res => {
                    if (res.data !== "Success") {
                        alert("Something went wrong. Try again.")
                    } else {
                        window.location.reload();
                    }
                })

        } catch (error) {
            console.error("Error parsing task content:", error);
        }
    }

    // Function to transform the task content into a JSON object
    const parseTaskContent = (content) => {
        const lines = content.split('\n');
        const taskObject = {};
        lines.forEach(line => {
            const [key, value] = line.split(':');
            taskObject[key.trim()] = value.trim();
        });

        return taskObject;
    }

    const handleButtonLogOut = () => {
        navigate('/')
    }

    return (
        <div className='showTasksPanel'>
            <div className='showTasksPanelMain'>
                {tasks.length === 1 && tasks[0] === noTasksHeader ? (
                    <h1>{noTasksHeader}</h1>
                ) : (
                    tasks.map((task, index) => (
                        <>
                            <textarea
                                key={index}
                                spellCheck="false"
                                value={task}
                                readOnly
                            />
                            <button id={index} onClick={handleButtonDeleteTask}> Delete </button>
                        </>
                    ))
                )}

            </div>
            <div className='showTasksPanelLogOutButton'>
                <button id="btnLogOut" onClick={handleButtonLogOut}> Log out </button>
            </div>
        </div >
    );
};

export default ShowTasksPanel;