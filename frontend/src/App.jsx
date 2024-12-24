import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch data from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/student/list");
        setStudents(response.data.data || []);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudents();
  }, []);

  // Sort students by Experience
  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.Experience - b.Experience;
    } else {
      return b.Experience - a.Experience;
    }
  });

  // Filter students by search query
  const filteredStudents = sortedStudents.filter((student) => {
    const name = student.Name || ""; 
    const skill = student.Skill || ""; 
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Student List</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Name or Skill"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sort By Experience */}
      <div className="mb-6">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="p-3 bg-blue-500 text-white rounded-lg"
        >
          Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Skill</th>
              <th className="p-3 text-left">Branch</th>
              <th className="p-3 text-left">Experience (Years)</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{student.id}</td>
                  <td className="p-3">{student.Name}</td>
                  <td className="p-3">{student.Skill}</td>
                  <td className="p-3">{student.Branch}</td>
                  <td className="p-3">{student.Experience}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
