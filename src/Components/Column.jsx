import Task from './Task';
import './Column.css';

const Column = ({ title, tasks = [], onDelete, onComplete, onSort, searchQuery = '', onDragStart, onDragOver, onDrop, onUpdate }) => {
  // Filter tasks based on the search query
  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div
      className="column"
      onDragOver={(e) => onDragOver(e)} // Allowing drop by preventing the default behavior
      onDrop={(e) => onDrop(e, title)} // Handling drop event
    >
      <h2 id='title'>{title}</h2>
      {/* Button to sort tasks by name */}
      <button className="sort-button" onClick={onSort}>Sort by Name</button>
      {/* Display the list of filtered tasks */}
      <div className="tasks-list">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            draggable // Making the task draggable
            onDragStart={(e) => onDragStart(e, task.id)} // Handling drag start event
            className="task-container"
          >
            {/* Render the Task component and pass necessary props */}
            <Task task={task} onDelete={onDelete} onComplete={onComplete} onUpdate={onUpdate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
