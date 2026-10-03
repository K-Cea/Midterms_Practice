import React, { useState } from 'react';

export default function FilterableRecordTable({ records = [] }) {
  // 1. State to track the active filter choice
  const [selectedStatus, setSelectedStatus] = useState('All');

  // 2. Filter logic: Show all if 'All' is selected, otherwise match status
  const filteredRecords = selectedStatus === 'All'
    ? records
    : records.filter((item) => item.status.toLowerCase() === selectedStatus.toLowerCase());

  return (
    <div style={{ padding: '1rem' }}>
      {/* COMP-06: Status Filter Dropdown */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="status-filter" style={{ fontWeight: 'bold', marginRight: '8px' }}>
          Filter by Status:
        </label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '4px' }}
        >
          <option value="All">All Records</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Table displaying the filtered results */}
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.length > 0 ? (
            filteredRecords.map((r) => (
              <tr key={r.id || r.title}>
                <td>{r.title}</td>
                <td>{r.category}</td>
                <td>{r.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                No records found matching "{selectedStatus}".
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
