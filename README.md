# TASKER

Tasker is a task management application with user authentication and task-related functionalities. The application consists of both frontend and backend components.

1. Frontend (React)
The frontend of the Tasker application is built using React. The main components are:

1.1. App.js:
- Handles routing using react-router-dom.
- Routes include login, account creation, password change, and the main tasks page.

1.2. LoginPage.jsx:
- Allows users to log in with their credentials.
- Validates login and password using the provided functions.
- Uses Axios to communicate with the backend for authentication.

1.3. ChangePassword.jsx:
- Enables users to change their passwords after logging in.
- Validates login and old/new passwords.
- Communicates with the backend for password change.

1.4. CreateAccount.jsx:
- Facilitates the creation of a new user account.
- Validates login and password.
- Communicates with the backend to create a new account.

1.5. TasksPage.jsx:
- The main tasks page displaying different panels for adding, ordering, showing, and finding tasks.
- Communicates with the backend for task-related functionalities.

  1.5.1 AddTasksPanel.jsx
    1.5.1.1. Description
    The AddTasksPanel component allows users to add new tasks. It includes input fields for task name, description, date, and priority. Users can set these values and add the task by clicking the "Add" button. A "Clear" button resets the input fields.

    1.5.1.2. Dependencies
    - React
    - Axios
 
    1.5.1.3. Usage
    - Import the component.
    - Integrate into the UI.
    - Use the validateAddingTask and login props for task validation and user login.

  1.5.2. OrderTasksPanel.jsx
    1.5.2.1. Description
    The OrderTasksPanel component provides functionality to order tasks based on criteria. Users select the ordering criteria and order type (ASC or DESC) before clicking "Set" to apply the ordering.
    
    1.5.2.2. Dependencies
    - React
  
    1.5.2.3. Usage
    - Import the component.
    - Integrate into the UI.
    - Utilize the handleActualOrderBy and handleActualOrderType props for ordering tasks.
  
  1.5.3. ShowTasksPanel.jsx
    1.5.3.1. Description
    The ShowTasksPanel component displays the user's tasks and allows task deletion. Tasks are retrieved from the backend and formatted for presentation. Users can delete tasks by clicking "Delete."
    
    1.5.3.2. Dependencies
    - React
    - Axios
    - Moment.js
  
    1.5.3.3. Usage
    - Import the component.
    - Integrate into the UI.
    - Use the login, actualTask, actualOrderBy, and actualOrderType props for task display and deletion.
  
  1.5.4. FindTasksPanel.jsx
    1.5.4.1. Description
    The FindTasksPanel component lets users find tasks based on criteria like name, date, or priority. Users choose a search option, input details, and click "Find." Options to clear input fields, show all tasks, and log out are also available.
    
    1.5.4.2. Dependencies
    - React
    - Axios
    - React Router DOM

    1.5.4.3. Usage
    - Import the component.
    - Integrate into the UI.
    - Utilize various props (validateFindingTasks, login, handleActualTask, actualOrderBy, actualOrderType, setIsLoggedIn) for task finding, display, and user authentication.

2. Backend (Express, MySQL)
The backend is built using Express for the server, MySQL for the database, and CORS for cross-origin resource sharing. The main server file is server.js, which includes routes for user authentication and task management.

2.1. server.js:
- Sets up the Express server and MySQL database connection.
- Defines endpoints for user authentication (login, account creation, password change) and task management (add, show, find, delete tasks).
- Uses Axios for communication with the frontend.


Instructions for launching the project:
1. Clone the repository to your local machine: git clone https://github.com/Kamil2104/Tasker.git
2. Start your Control Panel (for example XAMPP (Start Apache and MySQL))
3. Click Admin button next to Stop button in your XAMPP Control Panel
4. Import there a database file
5. In first powershell: Navigate to the backend folder directory: cd path_to_backend_folder
6. Run the server: npm start
7. In second powershell: Navigate to the project directory: cd path_to_project
8. Install dependencies: npm install
9. Run the application: npm start
10. Open your browser and go to http://localhost:3000 to view the app.



Author: Niewiadomski Kamil

Note: This project was created as a demonstration and may require additional enhancements for production use. Feel free to reach out if you have any questions!
