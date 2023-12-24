import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const ShowTasksPanel = ({ login }) => {
    const noTasksHeader = "No tasks available.";
    const [tasks, setTasks] = useState([]);

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
                    const formattedTasks = res.data.map(task => (
                        Object.entries(task).map(([key, value]) => (
                            key === 'date' ? `${key}: ${moment(value).format('YYYY-MM-DD')}` : `${key}: ${value}`
                        )).join('\n')
                    ));

                    setTasks(formattedTasks);
                }
            })
            .catch(err => console.log(err));
    }, [login]);

    return (
        <div className='showTasksPanel'>
            <div className='showTasksPanelMain'>
                {tasks.length === 1 && tasks[0] === noTasksHeader ? (
                    <h1>{noTasksHeader}</h1>
                ) : (
                    tasks.map((task, index) => (
                        <textarea
                            key={index}
                            spellCheck="false"
                            value={task}
                            readOnly
                        />
                    ))
                )}
            </div>
            <div className='showTasksPanelLogOutButton'>
                <button id="btnLogOut"> Log out </button>
            </div>
        </div>
    );
};

export default ShowTasksPanel;