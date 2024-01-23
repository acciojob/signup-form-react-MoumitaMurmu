// SignupForm.js

import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    phoneNumber: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.password) {
      setError('All fields are mandatory.');
    } else if (!/^[a-zA-Z0-9\s]+$/.test(formData.name)) {
      setError('Name is not alphanumeric.');
    } else if (!formData.email.includes('@')) {
      setError('Email must contain @.');
    } else if (!['male', 'female', 'other'].includes(formData.gender)) {
      setError('Please identify as male, female or others.');
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      setError('Phone Number must contain only numbers.');
    } else if (formData.password.length < 6) {
      setError('Password must contain at least 6 letters.');
    } else {
      // If all validations pass, extract username and display welcome message
      const username = formData.email.split('@')[0];
      setError(`Hello ${username}!`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-testid="name"
          />
        </label>
        <br />

        <label>
          Email address:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="email"
          />
        </label>
        <br />

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} data-testid="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="password"
          />
        </label>
        <br />

        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupForm;
