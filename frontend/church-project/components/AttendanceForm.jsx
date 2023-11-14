'use client'
import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    minister: '',
    message: '',
    service_time: null,
    service_type: null,
    countingUnit: null,
    males: 0,
    females: 0,
    children: 0,
    vehicles: 0,
    firstTimers: 0,
    newConverts: 0,
    serviceDate: new Date(),
  });

  const service_time = [

    { value: '1', label: 'Sunday Service' },
    { value: '2', label: 'Midweek Service' },
  ];

  const service_types = [

    { value: '1', label: 'First Service' },
    { value: '2', label: 'Second Service' },
    { value: '3', label: 'Third Service' },
  ];

  const countingUnits = [

    { value: '1', label: 'Ushering Unit' },
    { value: '2', label: 'Hospitality Unit' },
  ];

  const handleSelectChange = (name, selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      serviceDate: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log('Form data submitted successfully');
      // Optionally, you can handle the response or redirect the user
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }

    console.log('Form Data:', formData);
    // Perform additional actions, e.g., send data to the server
  };

  return (
    <form onSubmit={handleSubmit} className=' w-2/4 mx-auto'>
      <label>
        Minister:
        <input type="text" name="minister" value={formData.minister} onChange={(e) => handleSelectChange('minister', e.target.value)} />
      </label>

      <label>
        Message:
        <input type="text" name="message" value={formData.message} onChange={(e) => handleSelectChange('message', e.target.value)} />
      </label>

      <label>
        Males:
        <input type="number" name="males" value={formData.males} onChange={(e) => handleSelectChange('males', e.target.value)} />
      </label>
      <label>
        Females:
        <input type="number" name="females" value={formData.females} onChange={(e) => handleSelectChange('females', e.target.value)} />
      </label>
      <label>
        Children:
        <input type="number" name="children" value={formData.children} onChange={(e) => handleSelectChange('children', e.target.value)} />
      </label>

      <label>
        First Timers:
        <input type="number" name="firstTimers" value={formData.firstTimers} onChange={(e) => handleSelectChange('firstTimers', e.target.value)} />
      </label>

      <label>
        New Converts:
        <input type="number" name="newConverts" value={formData.newConverts} onChange={(e) => handleSelectChange('newConverts', e.target.value)} />
      </label>

      <label>
        Vehicles:
        <input type="number" name="vehicles" value={formData.vehicles} onChange={(e) => handleSelectChange('vehicles', e.target.value)} />
      </label>
    
      <label>
        Service Type:
        <Select
          value={formData.service_time}
          onChange={(selectedOption) => handleSelectChange('service_type', selectedOption)}
          options={service_time}
        />
      </label>

      <label>
        Service Time:
        <Select
          value={formData.service_type}
          onChange={(selectedOption) => handleSelectChange('service_time', selectedOption)}
          options={service_types}
        />
      </label>

      <label>
        Counting Unit:
        <Select
          value={formData.countingUnit}
          onChange={(selectedOption) => handleSelectChange('countingUnit', selectedOption)}
          options={countingUnits}
        />
      </label>

      <label>
        Service Date:
        <DatePicker selected={formData.serviceDate} onChange={handleDateChange} />
      </label>

      {/* Add similar input fields for other model fields */}
      
      <button type="submit" className='mt-4 w-full bg-gray-800 text-white rounded-md'>Submit</button>
    </form>
  );
};

export default AttendanceForm;
