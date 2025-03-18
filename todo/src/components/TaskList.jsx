import { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleEdit = (task) => {
    setEditingTask(task._id);
    setEditText(task.title);
  };

  const handleUpdate = async (id) => {
    await updateTask(id, { title: editText });
    setEditingTask(null);
    fetchTasks();
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="task">
          {editingTask === task._id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(task._id)}>Save</button>
            </>
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
