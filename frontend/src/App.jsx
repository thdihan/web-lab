import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import Layout from "./components/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="create-task" element={<CreateTask />} />
                    <Route path="task-details" element={<TaskDetails />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
