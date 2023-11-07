"use client"
import React, { useState } from 'react';



function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        // You can handle form submission logic here, e.g., sending the data to an API

        const requestBody = {
            first_name: formData.firstname,
            last_name: formData.lastname,
            phone_number: formData.phone,
            address: formData.address,
            email: formData.email,
            password: formData.password,
        };

        const res = await fetch("http://127.0.0.1:8000/api/signup/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })

        if (res.status === 201) {

            alert('new user registered')

        }





        console.log('Form Data:', formData);
    };

    return (
        <div className="w-1/2 mx-auto mt-2">
            <h2 className="text-2xl font-semibold mb-2 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="firstname" >First Name:</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="lastname" >last Name:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" >Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" >Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="address" >Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password" >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
