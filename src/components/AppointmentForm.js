// AppointmentForm.js
import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      time: '',
      service: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} style={{ marginRight: '10px' }} />
      <input type="time" name="time" value={formData.time} onChange={handleChange} style={{ marginRight: '10px' }} />
      <input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleChange} style={{ marginRight: '10px' }} />
      <button type="submit" style={{ marginLeft: '10px' }}>Schedule</button>
    </form>
  );
};

export default AppointmentForm;
