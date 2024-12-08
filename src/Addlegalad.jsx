import React, { useState } from 'react';

const Addlegalad = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phoneNo: '',
    experience: '',
    address: ''
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
      const response = await fetch('http://localhost:8082/api/legaladvisors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        setMessage('Registration successful!');
      } else {
        console.error('Error registering user');
        setMessage('Error registering user');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('There was an error!');
    }
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", minHeight: '100vh' }}>
      {/* Navbar */}
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
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1
          style={{
            fontSize: '1.5em',
            color: '#f39c12',
            marginRight: 'auto',
            marginLeft: '2em'
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
            gap: '1.5em'
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
            <a href="/addlegelri" style={{ color: 'white', textDecoration: 'none', fontSize: '1em' }}>
              Add Legal Rights
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
          marginRight: 'auto'
        }}
      >
        <h2 style={{ marginBottom: '1em' }}>Register as Legal Advisor</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="experience">Experience (in years):</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
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
              cursor: 'pointer'
            }}
          >
            Register
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: '10px',
              color: message.includes('successful') ? 'green' : 'red'
            }}
          >
            {message}
          </p>
        )}
      </main>
    </div>
  );
};

export default Addlegalad;
