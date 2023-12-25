import React from 'react';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import AddTaskPanel from './TasksPage pages/AddTaskPanel';
import OrderTasksPanel from './TasksPage pages/OrderTasksPanel';
import ShowTasksPanel from './TasksPage pages/ShowTasksPanel';
import FindTasksPanel from './TasksPage pages/FindTasksPanel';

import { validateAddingTask } from '../Validation/AddTaskPanelValidation'
import { validateFindingTasks } from '../Validation/FindTasksPanelValidation'

import '../Styles/TasksPageStyle.css';

const TasksPage = () => {
  const location = useLocation();
  const userLogin = location?.state?.loginText;

  const [foundTasks, setFoundTasks] = useState([]);

  const handleFindTasks = (foundTasks) => {
    setFoundTasks(foundTasks);
  };

  return (
    <div className='tasksPage'>
      <div className='leftPanel'>
        <AddTaskPanel validateAddingTask={validateAddingTask} login={userLogin} />
      </div>
      <div className='centerPanel'>
        <OrderTasksPanel login={userLogin} />
        <ShowTasksPanel login={userLogin} foundTasks={foundTasks} />
      </div>
      <div className='rightPanel'>
        <FindTasksPanel validateFindingTasks={validateFindingTasks} login={userLogin} handleFindTasks={handleFindTasks} />
      </div>
    </div>
  )
}

export default TasksPage