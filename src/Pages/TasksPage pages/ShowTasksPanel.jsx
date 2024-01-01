import React, { useEffect, useState } from 'react';

import axios from 'axios';
import moment from 'moment';

const ShowTasksPanel = ({ login, actualTask, actualOrderBy, actualOrderType }) => {
    const noTasksHeader = "No tasks available.";
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const values = {
            user: login,
            orderBy: "Name",
            orderType: "ASC"
        };

        axios.post('http://localhost:8081/showTasks', values)
            .then(res => {
                if (res.data === "No tasks") {
                    setTasks([noTasksHeader]);
                } else if (res.data === "Error!") {
                    alert("Something went wrong with showing the tasks.");
                } else {
                    let tasksRes = res.data

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

    useEffect(() => {
        if (actualTask.length <= 0) {
            const values = {
                user: login,
                orderBy: actualOrderBy,
                orderType: actualOrderType
            }

            axios.post('http://localhost:8081/showTasks', values)
                .then(res => {
                    if (res.data === "No tasks") {
                        setTasks([noTasksHeader]);
                    } else if (res.data === "Error!") {
                        alert("Something went wrong with showing the tasks.");
                    } else {
                        let tasksRes = res.data

                        const formattedTasks = tasksRes.map(task => (
                            Object.entries(task).map(([key, value]) => (
                                key === 'Date' ? `${key}: ${moment(value).format('YYYY-MM-DD')}` : `${key}: ${value}`
                            )).join('\n')
                        ));

                        setTasks(formattedTasks);
                    }
                })
                .catch(err => console.log(err))
        }
    }, [actualOrderBy, actualOrderType, actualTask, login])

    useEffect(() => {
        if (actualTask.length > 0) {
            const sortedTasks = [...actualTask].sort((task1, task2) => {
                const task1Value = task1[actualOrderBy];
                const task2Value = task2[actualOrderBy];

                if (actualOrderType === 'ASC') {
                    return task1Value.toString().localeCompare(task2Value.toString());
                } else {
                    return task2Value.toString().localeCompare(task1Value.toString());
                }
            });

            const formattedSortedActualTask = sortedTasks.map(task => (
                Object.entries(task).map(([key, value]) => (
                    key === 'Date' ? `${key}: ${moment(value).format('YYYY-MM-DD')}` : `${key}: ${value}`
                )).join('\n')
            ));

            setTasks(formattedSortedActualTask);
        }
    }, [actualTask, actualOrderBy, actualOrderType]);

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

    return (
        <div className='showTasksPanel'>
            <div className='showTasksPanelMain'>
                {tasks.length === 1 && tasks[0] === noTasksHeader ? (
                    <h1>{noTasksHeader}</h1>
                ) : (
                    tasks.map((task, index) => (
                        <div className='task' key={index}>
                            <textarea
                                spellCheck="false"
                                value={task}
                                readOnly
                            />
                            <button id={index} onClick={handleButtonDeleteTask}> Delete </button>
                        </div>
                    ))
                )}

            </div>
        </div >
    );
};

export default ShowTasksPanel;