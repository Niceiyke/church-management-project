'use client'
import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ServiceSelector from './ServiceSelector';


const AttendanceForm = async () => {
  const [formData, setFormData] = useState({
    minister: '',
    message: '',
    service_time: null,
    counting_unit: null,
    males: 0,
    females: 0,
    children: 0,
    vehicles: 0,
    first_timers: 0,
    new_converts: 0,
    serviceDate: new Date(),
  });

  const service_time = [

    { value: '1', label: 'First Service' },
    { value: '2', label: 'Second Service' },
    { value: '3', label: 'Third Service' },


  ];

  const service_types = [

    { value: '1', label: 'Sunday Service' },
    { value: '2', label: 'Midweek Service' },
  ];

  const counting_units = [

    { value: '1', label: 'Ushering Unit' },
    { value: '2', label: 'Hospitality Unit' },
  ];

  const res = await fetch('http://127.0.0.1:8000/api/services-list')

  const servicesList = await res.json()

  const handleSelectChange = (name, selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption && selectedOption.value !== undefined ? selectedOption.value : selectedOption,
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

      if (response.status === 201) {


        console.log('Form data submitted successfully');

      }

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
        <input type="number" name="first_timers" value={formData.first_timers} onChange={(e) => handleSelectChange('first_timers', e.target.value)} />
      </label>

      <label>
        New Converts:
        <input type="number" name="new_converts" value={formData.new_converts} onChange={(e) => handleSelectChange('new_converts', e.target.value)} />
      </label>

      <label>
        Vehicles:
        <input type="number" name="vehicles" value={formData.vehicles} onChange={(e) => handleSelectChange('vehicles', e.target.value)} />
      </label>


      <label>
        Service Time:
        <Select
          value={formData.service_time}
          onChange={(selectedOption) => handleSelectChange('service_time', selectedOption)}
          options={service_time}
        />
      </label>


      <label>
        Counting Unit:
        <Select
          value={formData.counting_unit}
          onChange={(selectedOption) => handleSelectChange('counting_unit', selectedOption)}
          options={counting_units}
        />
      </label>

      <label>
        Service Date:
        <DatePicker selected={formData.serviceDate} onChange={handleDateChange} />
      </label>

      <ServiceSelector
        selectedService={formData.service_type}  // assuming your service type is stored in `service_type`
        onSelectService={(selectedService) => handleSelectChange('service_type', selectedService)}
      />


      <button type="submit" className='mt-4 w-full bg-gray-800 text-white rounded-md'>Submit</button>
    </form>
  );
};

export default AttendanceForm;
