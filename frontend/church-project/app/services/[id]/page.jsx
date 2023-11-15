import FirstService from '@/components/FirstService'
import MidWeekService from '@/components/MidWeekService'
import SecondService from '@/components/SecondService'
import ThirdService from '@/components/ThirdService'
import VerifyServiceButton from '@/components/VerifyServiceButton'

const ServiceDetail = async ({ params }) => {

  const id = params.id

  const res = await fetch(`http://127.0.0.1:8000/api/services/${id}/`,{
        cache :'no-cache'
    })

  const service = await res.json()


  return (
   <>
     {
     service.service_type.name=="Sunday Service"?
     <div className='md:flex md:gap-4 md:justify-between '>
      <FirstService id={id} />
      <SecondService id={id} />
      <ThirdService id={id} />
    </div>
    :
    <div>
      <MidWeekService id={id}/>
    </div> 
    
    }
   
   {!service.is_verified && <VerifyServiceButton id={id} />}

   </>
  )
  
  }

export default ServiceDetail