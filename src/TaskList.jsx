import React, { useState } from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, editTask }) {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('priority');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority - b.priority;
    } else if (sortBy === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0;
  });

  return (
    <div className="task-list">
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <label>Sort By: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
      {sortedTasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
}

export default TaskList;
