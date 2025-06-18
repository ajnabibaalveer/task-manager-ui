import React from 'react';

export default function FilterSort({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div className="d-flex justify-content-between w-75">
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="form-select me-2">
        <option value="All">All Statuses</option>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="form-select">
        <option value="">Sort By</option>
        <option value="title">Title</option>
        <option value="dueDate">Due Date</option>
      </select>
    </div>
  );
}