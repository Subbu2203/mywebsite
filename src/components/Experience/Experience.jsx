import Button from "../Utiliticies/Button";
import HeaderTitle from "../Utiliticies/Headertitle/HeaderTitle";

const Experience = () => {
  return ( 
    <div className='lg:container mx-auto w-full md:py-[300px] py-[200px] bg-white'>

      <div className='md:flex items-center justify-between gap-[180px] space-y-8 md:space-y-0 '>

        <div className="max-w-[630px] w-full h-auto">

          <img src="/mywebsite/experiences.png" alt="experience image" className='object-cover rounded-l-2xl w-auto h-auto' />
        </div>


        <div className='max-w-[564px] w-full h-auto'>

          <HeaderTitle title={'we provide you the best experience '} subtitle={'experience'} />
          <p className="text-lg text-[#1e1e1e] font-normal mt-4 mb-4">You don't have to worry about the result because all these interiors are made by people who are professionals
            in their fields with an elegant and luxrious style and with premium quality materials</p>

          <Button content={'more info'}></Button>

        </div>
      </div>
    </div>
  )
}

export default Experience;