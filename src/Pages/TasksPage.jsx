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

  const [actualTask, setActualTask] = useState([]);

  const[actualOrderBy, setActualOrderBy] = useState("Name")
  const[actualOrderType, setActualOrderType] = useState("ASC")

  const handleActualTask = (actualTaskParam) => {
    setActualTask(actualTaskParam);
  };

  const handleActualOrderBy = (actualOrderByParam) => {
    setActualOrderBy(actualOrderByParam)
  }

  const handleActualOrderType = (actualOrderTypeParam) => {
    setActualOrderType(actualOrderTypeParam)
  }

  return (
    <div className='tasksPage'>
      <div className='leftPanel'>
        <AddTaskPanel validateAddingTask={validateAddingTask} login={userLogin} />
      </div>
      <div className='centerPanel'>
        <OrderTasksPanel handleActualOrderBy={handleActualOrderBy} handleActualOrderType={handleActualOrderType}/>
        <ShowTasksPanel login={userLogin} actualTask={actualTask} actualOrderBy={actualOrderBy} actualOrderType={actualOrderType}/>
      </div>
      <div className='rightPanel'>
        <FindTasksPanel validateFindingTasks={validateFindingTasks} login={userLogin} handleActualTask={handleActualTask} actualOrderBy={actualOrderBy} actualOrderType={actualOrderType} />
      </div>
    </div>
  )
}

export default TasksPage