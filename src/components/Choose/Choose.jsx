import Button from "../Utiliticies/Button";
import HeaderTitle from "../Utiliticies/Headertitle/HeaderTitle"


const Choose = () => {

  const chooseData = [

    {
      title: 'luxury facilities',
      description: 'the advantage of hiring a workspace with us is that gives you comfortable service and all around facilities ',
    },
    {
      title: 'Affordable price ',
      description: 'You can get a workspace of the highest quality at and affordable prices and still enjoy the facilities that are only here'
    },
    {
      title: 'Many Choices',
      description: 'the advantage of hiring a workspace with us is that gives you comfortable service and all around facilities ',
    },
  ];
  return (
    <div className="lg:container mx-auto pb-[120px] pt-[120px]">
      <div className="md:flex items-center justify-between gap-6 space-y-8 md:space-y-0">

        <div className='max-w-[248px] h-auto w-full'>

          <HeaderTitle title={'Why choosing us'}></HeaderTitle>
        </div>

        <div className="grid grid-cols-3 gap-8">

          {
            chooseData?.map((item, index) => (

              <div key={index} className='space-y-4'>

                <h3 className='text-2xl text-[#1e1e1e] font-bold capitalize'>{item?.title}</h3>
                <p className='text-base text-[#e1e1e1e] font-normal'>{item.description}</p>
                <Button content={'more info'} />
              </div>

            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Choose