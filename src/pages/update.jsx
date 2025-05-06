import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams(); // Get the id from URL params
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Fetch user data by id on component load
  useEffect(() => {
    const fetchData = async () => {
     {
        const response = await axios.get(`http://localhost:3000/userinfo/${id}`);
        setFormData(response.data);
      } 
    };
    fetchData();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Update user data via PUT request
  const handleUpdate = async () => {
     {
      await axios.put(`http://localhost:3000/userinfo/${id}`, formData);
    //   alert("User updated successfully!");
      navigate("/data"); // Redirect to data page
    } 
  };

  return (
    <div className="border h-fit w-screen mx-auto bg-gray-200 p-6">
      <h2 className="text-2xl font-semibold mb-4">Update User</h2>
      <div className="flex flex-col gap-4 w-1/2 mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button
          onClick={handleUpdate}
          className="border p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
