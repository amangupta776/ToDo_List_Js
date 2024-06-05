import  { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete, onComplete, onUpdate }) => {
  // State to manage whether the task is in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to store the edited task details
  const [editedTask, setEditedTask] = useState({ name: task.name, dueDate: task.dueDate });

  // Function to handle the edit action
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle the save action after editing
  const handleSave = () => {
    onUpdate(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        // Render input fields for editing if in editing mode
        <div className="task-edit">
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
          />
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
          />
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      ) : (
        // Render task details if not in editing mode
        <div className="task-view">
          <span>{task.name}</span>
          <span>{task.dueDate}</span>
        </div>
      )}
      <div className="task-actions">
        {/* Button to mark task as complete/incomplete */}
        <button className="complete-button" onClick={() => onComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        {/* Button to delete task */}
        <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
        {/* Button to enable editing mode */}
        {!isEditing && <button className="edit-button" onClick={handleEdit}>Edit</button>}
      </div>
    </div>
  );
};

export default Task;
