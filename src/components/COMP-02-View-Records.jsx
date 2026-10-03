import React from 'react';

export default function RecordTable({ records = [] }) {
  if (records.length === 0) {
    return <p>No records found.</p>;
  }

  return (
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f4f4f4' }}>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// 1. Add this function inside your component:
const handleDelete = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this record?");
  if (confirmed) {
    // If you have setRecords state:
    setRecords(records.filter((item) => item.id !== id));
  }
};

// 2. In your table headers (<thead>), add an "Actions" header:
<th>Actions</th>

// 3. In your table rows (<tbody> / map loop), add the Delete button cell:
<td>
  <button 
    onClick={() => handleDelete(item.id)} 
    style={{ color: "red", cursor: "pointer" }}
  >
    Delete
  </button>
</td>
