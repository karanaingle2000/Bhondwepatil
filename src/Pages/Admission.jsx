import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-white ">
      <div className="w-full flex justify-center mb-6">
        <img src="./images/subheaderbg.jpg" alt="Header" className="w-full max-h-60 object-cover" />
      </div>
      <div className="flex justify-center">
        <form
          className="bg-blue-800 text-white p-8 rounded-lg w-full max-w-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-14">Please fill the Form below to Place Admission Enquiry</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="studentName"
              placeholder="Name of Student"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="grade"
              placeholder="Admission Required For Which Grade?"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Residential Address"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;