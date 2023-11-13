

async function SecondService({ id }) {

    const res = await fetch(`http://127.0.0.1:8000/api/services/${id}/`,{
        cache :'no-cache'})

    const service = await res.json()



    return (
        <div className="flex flex-col justify-center border-2 w-1/3 p-4">
            <h2 className="text-center">Second Service</h2>
            <div><p>{service.service_type.name}</p> <p>{service.service_date}</p></div>
            
            {service.attendance.filter(entry => entry.service_time.name === "Second service").map(entry =>
                <ul key={entry.id}>
                    <li>Message:{entry.message}</li>
                    <li className="mb-4">Minister:{entry.minister}</li>

                    <h3>Attendance </h3>
                    <li>Males:{entry.males}</li>
                    <li>Females:{entry.females}</li>
                    <li>Children:{entry.children}</li>
                    <li className="mb-4">Total: {entry.males + entry.females + entry.children}</li>
                    <li>First Timers:{entry.first_timers}</li>
                    <li>New Converts:{entry.new_converts}</li>
                    <li>Vehicles:{entry.vehicles}</li>

                </ul>)}

        </div>
    )
}

export default SecondService