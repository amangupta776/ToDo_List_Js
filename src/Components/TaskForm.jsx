import  { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAdd }) => {
  // State to manage the task name input
  const [name, setName] = useState('');
  // State to manage the due date input
  const [dueDate, setDueDate] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAdd function passed as a prop with the new task details
    onAdd({ name, dueDate });
    // Reset the input fields after submission
    setName('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button className="add-task-button" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
