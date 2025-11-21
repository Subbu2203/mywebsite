import TestimonialSlider from "../TestimonialSlider/TestimonialSlider"
import HeaderTitle from "../Utiliticies/Headertitle/HeaderTitle"


const Testimonials = () => {


  const clientReviews = [
    {
      name: 'bang upin',
      avatar: '/avater_1.png',
      review: 'I am alted to share my great experience with panto. With the service and the quality of the product, their delivery was fast and customer service was excellent. I highly recommend this company ',
      rating: 5,
      image: '/client_1.png',
    },
    {
      name: 'Subash paul',
      avatar: '/avater_1.png',
      review: 'I am alted to share my great experience with panto. With the service and the quality of the product, their delivery was fast and customer service was excellent. I highly recommend this company ',
      rating: 5,
      image: '/client_2.png',
    },
    {
      name: 'Roho up',
      avatar: '/avater_1.png',
      review: 'I am alted to share my great experience with panto. With the service and the quality of the product, their delivery was fast and customer service was excellent. I highly recommend this company ',
      rating: 5,
      image: '/client_3.png',
    },
    {
      name: 'virat kohli',
      avatar: '/avater_1.png',
      review: 'I am alted to share my great experience with panto. With the service and the quality of the product, their delivery was fast and customer service was excellent. I highly recommend this company ',
      rating: 5,
      image: '/client_2.png',
    },
    {
      name: 'Ravi jadeja',
      avatar: '/avater_1.png',
      review: 'I am alted to share my great experience with panto. With the service and the quality of the product, their delivery was fast and customer service was excellent. I highly recommend this company ',
      rating: 5,
      image: '/client_1.png',
    },
  ]

  return (
    <div className="lg:container mx-auto w-full pt-[240px] pb-[200px] bg-white">
      <div className="flex flex-col items-center w-full justify-between mb-10">
          <HeaderTitle title={'Our Client reviews'} subtitle={'testimonials'} />
      </div>


{/* {testimonial slider} */}
      <div>
           <TestimonialSlider content={clientReviews} />
      </div>
    </div>
  )
}

export default Testimonials