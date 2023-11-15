import CurrencyFormatter from "@/utils/CurrencyFormatter"


async function ThirdService({ id }) {


    const res = await fetch(`http://127.0.0.1:8000/api/services/${id}/`, {
        cache: 'no-cache'
    })

    const service = await res.json()



    return (
        <div className="border-2 px-4">
            <h2 className="text-center">Third Service</h2>
            <div className=""><p>{service.service_type.name}</p> <p>{service.service_date}</p></div>

            {service.attendance.filter(entry => entry.services_times === "Third Service").map(entry =>
                <ul key={entry.id} className="">
                    <li>Message:{entry.message}</li>
                    <li className="mb-4">Minister:{entry.minister}</li>
                    <h2 >Attendance </h2>
                    <li>Males:{entry.males}</li>
                    <li>Females:{entry.females}</li>
                    <li>Children:{entry.children}</li>
                    <li className="mb-4">Total: {entry.males + entry.females + entry.children}</li>
                    <li>First Timers:{entry.first_timers}</li>
                    <li>New Converts:{entry.new_converts}</li>
                    <li className="mb-4">Vehicles:{entry.vehicles}</li>

                </ul>)}

            <h2>Income:</h2>

            {service.income.filter(entry => entry.services_times=== "Third Service").map(entry =>
                <ul key={entry.id}>
                    <li className="mt-4 mb-4">Offering: <h3><CurrencyFormatter amount={entry.offering}/></h3></li>
                    <li className="mb-4">Tithe: <h3> <CurrencyFormatter amount={entry.tithe}/></h3> </li>
                    <li className="mb-4">Thanksgiving:<h3> <CurrencyFormatter amount={entry.thanksgiving}/></h3>  </li>
                    <li className="mb-4">Projects:<h3> <CurrencyFormatter amount={entry.projects}/> </h3> </li>
                    <li className="mb-4">Shiloh Sacrifice:<h3> <CurrencyFormatter amount={entry.shiloh_sacrifice}/></h3> </li>
                    <li className="mb-4">Total:<h3> <CurrencyFormatter amount={entry.shiloh_sacrifice+entry.projects+entry.thanksgiving+entry.tithe+entry.offering}/></h3> </li>
                </ul>)}

        </div>
    )
}

export default ThirdService