"use client"
import React, { useState } from 'react';

const ServiceSelector = () => {
    const serviceList = [
        [1, "Sunday Service - 2023-10-29"],
        [2, "Sunday Service - 2023-11-05"],
        [3, "Sunday Service - 2023-11-12"],
        [4, "Sunday Service - 2023-11-19"],
        [5, "Sunday Service - 2023-11-26"],
        [6, "Midweek Service - 2023-11-01"],
        [7, "Midweek Service - 2023-11-08"],
        [8, "Midweek Service - 2023-11-15"],
        [9, "Midweek Service - 2023-11-22"],
        [10, "Midweek Service - 2023-11-29"]
    ];

    const [selectedService, setSelectedService] = useState(null);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedService(selectedValue);
    };

    return (
        <div>
            <label htmlFor="serviceSelect">Select a Service:</label>
            <select
                id="serviceSelect"
                onChange={handleChange}
                value={selectedService || ''}
            >
                <option value="" disabled>Select a service</option>
                {serviceList.map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            {selectedService && (
                <p>You selected: {serviceList.find(([value]) => value === selectedService)[1]}</p>
            )}
        </div>
    );
};

export default ServiceSelector;
