import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AddTaskPanel from './TasksPage pages/AddTaskPanel';
import OrderTasksPanel from './TasksPage pages/OrderTasksPanel';
import ShowTasksPanel from './TasksPage pages/ShowTasksPanel';
import FindTasksPanel from './TasksPage pages/FindTasksPanel';

import { validateAddingTask } from '../Validation/AddTaskPanelValidation'
import { validateFindingTasks } from '../Validation/FindTasksPanelValidation'

import axios from 'axios';

import '../Styles/TasksPageStyle.css';

const TasksPage = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const userLogin = location?.state?.loginText;

  const [isLoggedIn, setIsLoggedIn] = useState()
  const [actualTask, setActualTask] = useState([]);

  const [actualOrderBy, setActualOrderBy] = useState("Name")
  const [actualOrderType, setActualOrderType] = useState("ASC")

  const handleActualTask = (actualTaskParam) => {
    setActualTask(actualTaskParam);
  };

  const handleActualOrderBy = (actualOrderByParam) => {
    setActualOrderBy(actualOrderByParam)
  }

  const handleActualOrderType = (actualOrderTypeParam) => {
    setActualOrderType(actualOrderTypeParam)
  }

  const handleButtonTakeUserToLoginPage = () => {
    navigate('/')
  }

  useEffect(() => {
    const values = {
      login: userLogin
    }

    axios.post('http://localhost:8081/userIsLoggedIn', values)
      .then(res => {
        if (res.data === "Success") {
          setIsLoggedIn(true)
        } else if (res.data === "Logged out") {
          setIsLoggedIn(false)
        }
      })
      .catch(err => console.log(err))
  }, [userLogin])

  return (
    <div className='tasksPage'>
      {isLoggedIn === true ? (
        <div className='tasksPageUserLoggedIn'>
          <div className='leftPanel'>
            <AddTaskPanel validateAddingTask={validateAddingTask} login={userLogin} />
          </div>
          <div className='centerPanel'>
            <OrderTasksPanel handleActualOrderBy={handleActualOrderBy} handleActualOrderType={handleActualOrderType} />
            <ShowTasksPanel login={userLogin} actualTask={actualTask} actualOrderBy={actualOrderBy} actualOrderType={actualOrderType} />
          </div>
          <div className='rightPanel'>
            <FindTasksPanel validateFindingTasks={validateFindingTasks} login={userLogin} handleActualTask={handleActualTask} actualOrderBy={actualOrderBy} actualOrderType={actualOrderType} setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      ) : isLoggedIn === false ? (
        <div className='tasksPageUserLoggedOut'>
          <div className='tasksPageUserLoggedOutHeader'>
            <h1> You have to log in! </h1>
          </div>
          <div className='tasksPageUserLoggedOutGoToLoginPage'>
            <button onClick={handleButtonTakeUserToLoginPage}> Go to login page </button>
          </div>
        </div>
      ) : (
        <div className='blankContainer'>

        </div>
      )
      }
    </div>
  )
}

export default TasksPage