import React from 'react';

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
  const loginText = location?.state?.loginText;

  return (
    <div className='tasksPage'>
      <div className='leftPanel'>
        <AddTaskPanel validateAddingTask={validateAddingTask}/>
      </div>
      <div className='centerPanel'>
        <OrderTasksPanel />
        <ShowTasksPanel />
      </div>
      <div className='rightPanel'>
        <FindTasksPanel validateFindingTasks={validateFindingTasks} />
      </div>
    </div>
  )
}

export default TasksPage