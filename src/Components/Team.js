import React, { useState } from 'react';

const Team = () => {
  const [formData, setFormData] = useState({
    name: '',
    post: '',
    password: '',
    contributions: [],
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData);

    // You can integrate this with a backend API to save the data.
    alert('User signed up successfully!');

    // Reset form
    setFormData({
      name: '',
      post: '',
      password: '',
      contributions: [],
      skills: [],
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sign Up for the Team</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginLeft: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <label htmlFor="post">Post:</label>
          <input
            type="text"
            id="post"
            name="post"
            value={formData.post}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginLeft: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginLeft: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Team;
