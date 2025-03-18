import axios from "axios";

const API_URL = "http://localhost:3030/api/task";

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`http://localhost:3030/api/task/${taskId}`);
    console.log(response.data); // Debugging
  } catch (error) {
    console.error("Error deleting task:", error.response?.data || error.message);
  }
};

