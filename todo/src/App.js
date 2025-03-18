import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./components/style.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
      <TaskList key={refresh} />
    </div>
  );
};

export default App;
