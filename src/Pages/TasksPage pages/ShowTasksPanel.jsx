import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                    // Przekształć obiekt i utrzymanie tablicy
                    const flatObject = res.data.map(task => (
                        Object.entries(task).map(([key, value]) => `${key}: ${value}`).join('\n')
                    ));

                    setTasks(flatObject);
                }
            })
            .catch(err => console.log(err));
    }, [login]);

    return (
        <div className='showTasksPanel'>
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
    );
};

export default ShowTasksPanel;