import React, { useState } from 'react';
import './StudentManager.css';

function StudentManager() {
  const initialStudents = [
    { id: 'S001', name: 'Arjun Mehta',  course: 'Computer Science' },
    { id: 'S002', name: 'Priya Nair',   course: 'Data Analytics' },
    { id: 'S003', name: 'Rohan Sharma', course: 'Artificial Intelligence' },
    { id: 'S004', name: 'Sneha Pillai', course: 'Cybersecurity' },
    { id: 'S005', name: 'Vikram Joshi', course: 'Cloud Computing' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', course: '' });
  const [toast, setToast] = useState({ show: false, msg: '' });

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2000);
  };

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const { id, name, course } = newStudent;
    if (!id.trim() || !name.trim() || !course.trim()) {
      showToast('⚠ Please fill all fields');
      return;
    }
    if (students.find((s) => s.id === id.trim())) {
      showToast('⚠ Student ID already exists');
      return;
    }
    setStudents([...students, { id: id.trim(), name: name.trim(), course: course.trim() }]);
    setNewStudent({ id: '', name: '', course: '' });
    showToast('✓ Student added');
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
    showToast('✓ Student removed');
  };

  return (
    <div className="portal">
      {/* Header */}
      <div className="header">
        <h1>Student Portal</h1>
        <span className="badge">Academic Management</span>
      </div>

      {/* Enroll Form */}
      <div className="form-card">
        <h2 className="section-title">Enroll New Student</h2>
        <div className="form-row">
          <div className="field">
            <label>Student ID</label>
            <input
              name="id"
              placeholder="S006"
              value={newStudent.id}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              name="name"
              placeholder="e.g. Anika Rao"
              value={newStudent.name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Course</label>
            <input
              name="course"
              placeholder="e.g. Machine Learning"
              value={newStudent.course}
              onChange={handleChange}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
          </div>
          <button className="btn-add" onClick={handleAdd}>
            + Add Student
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="table-wrap">
        <div className="table-header">
          <h2>Enrolled Students</h2>
          <span className="count-pill">{students.length} enrolled</span>
        </div>

        {students.length === 0 ? (
          <div className="empty-state">
            <div className="icon">📋</div>
            <p>No students available</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="id-cell">{student.id}</td>
                  <td className="name-cell">{student.name}</td>
                  <td>
                    <span className="course-pill">{student.course}</span>
                  </td>
                  <td>
                    <button
                      className="btn-del"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
    </div>
  );
}

export default StudentManager;
