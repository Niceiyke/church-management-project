import FirstService from '@/components/FirstService'
import GetService from '@/components/GetService'
import SecondService from '@/components/SecondService'
import ThirdService from '@/components/ThirdService'

const ServiceDetail = async ({ params }) => {

  const id = params.id



  return (
    <div className='flex gap-4 justify-between'>
      <FirstService id={id} />
      <SecondService id={id} />
      <ThirdService id={id} />

    </div>
  )
}

export default ServiceDetail

