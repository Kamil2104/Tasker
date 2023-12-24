import React, { useEffect } from 'react'

import axios from 'axios'

const ShowTasksPanel = ({ login }) => {
    // const name = "Ogarnąć mieszkanieaaaaaaaaaaaaaa";
    // const description = "Posprzątać całe mieszkanie i zetrzeć kurze";
    // const date = "14.12.2023";
    // const priority = "High";

    useEffect(() => {
        const values = {
            user: login
        }

        axios.post('http://localhost:8081/showTasks', values)
        .then(res => {
            if (res.data === "No tasks") {
                // SHOW h1
            } else if (res.data === "Error!") {
                alert ("Something went wrong with showing the tasks.")
            } else {
                console.log(res.data)
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
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
    )
}

export default ShowTasksPanel