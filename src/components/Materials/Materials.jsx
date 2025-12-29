import Button from "../Utiliticies/Button"
import HeaderTitle from "../Utiliticies/Headertitle/HeaderTitle"


const Materials = () => {
  return (
    <div className="lg:container mx-auto w-full  pb-[200px]">
      <div className=" md:flex items-center justify-between gap-[200px] space-y-8 md:space-y-0 ">
        <div className='max-w-[565px] w-full h-auto'>

          <HeaderTitle title={'Very serious materials for making furnitures' } subtitle={'materials'} />

          <p className="text-lg text-[#1e1e1e] font-normal mt-4 mb-4">Because panto was very serious about designing furniture for our environment, using a very expensive 
            and famous capital but at a relatively low price
          </p>

         <Button content={'more info'} />
        </div>

        <div className="flex items-center gap-6">
           <div className="flex flex-col gap-4">
              <img className="max-w-[300px] min-h-[300px] rounded-lg  w-full h-full object-cover" src="/mywebsite/materials_1.png" alt="" />
              <img className="max-w-[250px] min-h-[300px] rounded-lg  w-full h-full object-cover" src="/mywebsite/materials_2.png" alt="" />

           </div>
           <div>
            <img className="max-w-[620px] w-full min-h-[480px] h-full object-cover rounded-xl" src="/mywebsite/materials_3.png" alt="" />
           </div>

        </div>

      </div>
    </div>
  )
}

export default Materials