import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";

export const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTask] = useState([]);

    // Delete Task
    const deleteTask = (id) => {
        setTask(prev => prev.filter(task => task.id !== id));
    }

    // Add Task
    const addTask = (text, day, reminder) => {
        const task = { id: Date.now(), text, day, reminder };
        setTask([...tasks, task]);
    }

    // Toggle Task
    const toggleTask = (id) => {
        setTask(prev => prev.map(task => task.id === id ? {...task,reminder:!task.reminder}: task))
    }

    return (
        <div className="container">
            <Header showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} /> : "No Task to Show"}
        </div>
    );
}