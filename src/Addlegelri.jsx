import React, { useState } from 'react';

const Addlegelri = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8082/api/legal-rights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Legal right added:', data);
        setMessage('Legal right added successfully!');
        setFormData({ title: '', description: '' }); // Clear the form
      } else {
        setMessage('Error adding legal right');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the server');
    }
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <nav
        style={{
          backgroundColor: '#2c3e50',
          color: '#fff',
          height: '100px',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 2em',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '1.5em',
            color: '#f39c12',
            marginRight: 'auto',
            marginLeft: '2em',
          }}
        >
          Admin Portal
        </h1>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '1.5em',
          }}
        >
          <li>
            <a href="/adminindex" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              User Details
            </a>
          </li>
          <li>
            <a href="/addcoun" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              Add Counsellor
            </a>
          </li>
          <li>
            <a href="/addlegal" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              Add Legal Advisor
            </a>
          </li>
          <li>
            <a href="/addlegalri" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              Add Legal Right
            </a>
          </li>
          <li>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              Sign Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main
        style={{
          marginTop: '100px', // Offset for the fixed navbar
          padding: '2em',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h2 style={{ marginBottom: '1em' }}>Add Legal Right</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add Legal Right
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: '10px',
              color: message.includes('successfully') ? 'green' : 'red',
            }}
          >
            {message}
          </p>
        )}
      </main>
    </div>
  );
};

export default Addlegelri;
