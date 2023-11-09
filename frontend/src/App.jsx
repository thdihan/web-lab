import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import Layout from "./components/Layout";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Layout/>}>
                    <Route path="" element={<Home />} />
                    <Route path="create-task" element={<CreateTask />} />
                    <Route path="task-details" element={<TaskDetails />} />
                </Route>
                
            </Routes>
        </Router>
    );
}

export default App;
