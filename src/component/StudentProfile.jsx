import React, { useState, useEffect } from "react";

const STORAGE_KEY = "studentsData";

export default function StudentProfile() {
  const [students, setStudents] = useState({});
  const [form, setForm] = useState({
    id: null,
    name: "",
    rollNo: "",
    className: "",
    monthlyFee: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load saved students
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.rollNo || !form.className || !form.monthlyFee) {
      alert("Please fill all fields");
      return;
    }

    const classKey = form.className;
    const updated = { ...students };

    if (!updated[classKey]) updated[classKey] = [];

    if (isEditing) {
      updated[classKey] = updated[classKey].map((st) =>
        st.id === form.id ? { ...form } : st
      );
      setIsEditing(false);
    } else {
      updated[classKey].push({ ...form, id: Date.now().toString() });
    }

    setStudents(updated);

    setForm({ id: null, name: "", rollNo: "", className: "", monthlyFee: "" });
  };

  const handleEdit = (student, classKey) => {
    setForm({ ...student, className: classKey });
    setIsEditing(true);
  };

  const handleDelete = (id, classKey) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updated = { ...students };
      updated[classKey] = updated[classKey].filter((st) => st.id !== id);
      setStudents(updated);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Student Profile Management</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="rollNo"
          value={form.rollNo}
          onChange={handleChange}
          placeholder="Roll Number"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="className"
          value={form.className}
          onChange={handleChange}
          placeholder="Class"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="monthlyFee"
          value={form.monthlyFee}
          onChange={handleChange}
          placeholder="Monthly Fee"
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? "Update Student" : "Register Student"}
        </button>
      </form>

      {/* Student List */}
      {Object.keys(students).length === 0 ? (
        <p className="text-gray-600">No students registered yet.</p>
      ) : (
        Object.keys(students).map((classKey) => (
          <div key={classKey} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Class: {classKey}</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Roll No</th>
                  <th className="border p-2">Monthly Fee</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students[classKey].map((st) => (
                  <tr key={st.id}>
                    <td className="border p-2">{st.name}</td>
                    <td className="border p-2">{st.rollNo}</td>
                    <td className="border p-2">{st.monthlyFee}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(st, classKey)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(st.id, classKey)}
                        className="bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
