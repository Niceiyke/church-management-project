

async function FirstService({ id }) {

    console.log(id)

    const res = await fetch(`http://127.0.0.1:8000/api/services/${id}/`)

    const service = await res.json()



    return (
        <div className="ml-4 flex flex-col justify-center border-2 w-1/3 p-4">
            <h2 className="text-center">First Service</h2>
            <div><p>{service.service_type.name}</p> <p>{service.service_date}</p></div>
            <h3>Attendance </h3>
            {service.attendance.filter(entry => entry.service_time.name === "First Service").map(entry =>
                <ul>
                    <li>Males:{entry.males}</li>
                    <li>Femaleters:{entry.females}</li>
                    <li>Children:{entry.children}</li>
                    <li className="mb-4">Total: {entry.males + entry.females + entry.children}</li>
                    <li>First Timers:{entry.first_timers}</li>
                    <li>New Converts:{entry.new_converts}</li>
                    <li>Vehicles:{entry.vehicles}</li>

                </ul>)}

        </div>
    )
}

export default FirstService