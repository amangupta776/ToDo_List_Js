import  { useState } from 'react';
import Column from './Column';
import TaskForm from './TaskForm';
import './KanbanBoard.css';

function KanbanBoard() {
    // Load tasks from local storage or initialize with an empty array
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // State to store tasks
    const [tasks, setTasks] = useState(storedTasks);
    
    // State to store the search query
    const [searchQuery, setSearchQuery] = useState('');
    
    // State to store the ID of the dragged task
    const [draggedTaskId, setDraggedTaskId] = useState(null);

    // Update tasks state and local storage
    const updateTasksAndLocalStorage = (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    // Add a new task to the task list
    const addTask = (task) => {
        const newTask = { ...task, id: Date.now().toString(), status: 'todo', completed: false };
        const newTasks = [...tasks, newTask];
        updateTasksAndLocalStorage(newTasks);
    };

    // Delete a task from the task list
    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        updateTasksAndLocalStorage(newTasks);
    };

    // Mark a task as completed or incomplete
    const completeTask = (id) => {
        const newTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
        updateTasksAndLocalStorage(newTasks);
    };

    // Update task details
    const updateTask = (id, updatedTask) => {
        const newTasks = tasks.map((task) => task.id === id ? { ...task, ...updatedTask } : task);
        updateTasksAndLocalStorage(newTasks);
    };

    // Sort tasks by name within their status category
    const sortTask = (status) => {
        const sortedTasks = tasks
            .filter((task) => task.status === status)
            .sort((a, b) => a.name.localeCompare(b.name));
        const otherTasks = tasks.filter((task) => task.status !== status);
        const newTasks = [...sortedTasks, ...otherTasks];
        updateTasksAndLocalStorage(newTasks);
    };

    // Clear all completed tasks
    const clearCompletedTasks = () => {
        const newTasks = tasks.filter((task) => !task.completed);
        updateTasksAndLocalStorage(newTasks);
    };

    // Handle drag start event
    const onDragStart = (e, id) => {
        setDraggedTaskId(id);
        e.dataTransfer.effectAllowed = 'move';
    };

    // Handle drag over event
    const onDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    // Handle drop event and update task status
    const onDrop = (e, newStatus) => {
        e.preventDefault();
        const newTasks = tasks.map((task) => {
            if (task.id === draggedTaskId) {
                task.status = newStatus;
            }
            return task;
        });
        updateTasksAndLocalStorage(newTasks);
        setDraggedTaskId(null);
    };

    return (
        <div className="kanban-board-container">
            <h2 id='heading'>Todo List By Aman</h2>
            <TaskForm onAdd={addTask} />
            <input
                type="text"
                placeholder="Search tasks"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <div className="kanban-board">
                <Column
                    title="todo"
                    tasks={tasks.filter((task) => task.status === 'todo')}
                    onDelete={deleteTask}
                    onComplete={completeTask}
                    onSort={() => sortTask('todo')}
                    searchQuery={searchQuery}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onUpdate={updateTask}
                />
                <Column
                    title="inProgress"
                    tasks={tasks.filter((task) => task.status === 'inProgress')}
                    onDelete={deleteTask}
                    onComplete={completeTask}
                    onSort={() => sortTask('inProgress')}
                    searchQuery={searchQuery}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onUpdate={updateTask}
                />
                <Column
                    title="finished"
                    tasks={tasks.filter((task) => task.status === 'finished')}
                    onDelete={deleteTask}
                    onComplete={completeTask}
                    onSort={() => sortTask('finished')}
                    searchQuery={searchQuery}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onUpdate={updateTask}
                />
            </div>
            <button className="clear-completed-button" onClick={clearCompletedTasks}>Clear Completed Tasks</button>
        </div>
    );
}

export default KanbanBoard;
