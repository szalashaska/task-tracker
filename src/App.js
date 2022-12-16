import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const URL = "http://localhost:5000";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${URL}/tasks`);
    const data = await res.json();
    return data;
  };

  // Fetch Task to toggle the reminder
  const fetchTask = async (id) => {
    const res = await fetch(`${URL}/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`${URL}/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${URL}/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle important
  const toggleImportant = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, important: !taskToToggle.important };

    const res = await fetch(`${URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: data.important } : task
      )
    );
  };

  // Edit task
  const editTask = async (id, text, day) => {
    const taskToEdit = await fetchTask(id);
    const updatedTask = { ...taskToEdit, text: text, day: day };

    const res = await fetch(`${URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: data.text, day: data.day } : task
      )
    );
  };

  useEffect(() => {
    // Fetch tasks from mock server
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleImportant}
                    onEdit={editTask}
                  />
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
