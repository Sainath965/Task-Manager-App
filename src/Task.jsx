import React, { useState } from 'react';

function Task({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    editTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleCheckboxChange}
          />
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;