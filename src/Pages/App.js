import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import CreateAccount from './Pages/CreateAccount';
import ChangePassword from './Pages/ChangePassword';
import TasksPage from './Pages/CreateAccount';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <LoginPage />} > </Route>
                <Route path='/createNewAccount' element={ <CreateAccount />} > </Route>
                <Route path='/changePassword' element={ <ChangePassword />} > </Route>
                <Route path='/tasksPage' element={ <TasksPage />} > </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App