import React, { useState } from 'react';

export default function AddRecordForm({ onAddRecord }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) return;

    const newRecord = {
      id: Date.now(), // Temporary ID for standalone testing
      title,
      category,
      status,
    };

    if (onAddRecord) onAddRecord(newRecord);

    // Reset fields
    setTitle('');
    setCategory('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>Add New Record</h3>
      <div>
        <input
          type="text"
          placeholder="Record Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Record</button>
    </form>
  );
}
