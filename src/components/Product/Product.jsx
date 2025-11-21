import { useState } from "react"
import HeaderTitle from "../Utiliticies/Headertitle/HeaderTitle"
import ProductSlider from "../Slider/ProductSlider/ProductSlider"
const Product = () => {

  const [active, setActive] = useState({

    id: 0,
    category: 'chair'
  })

  const categoriesName = [

    {

      id: 0,
      category: 'chair',

    },
    {

      id: 1,
      category: 'sofa',

    },
    {

      id: 2,
      category: 'bed',

    }, {

      id: 3,
      category: 'lamp',

    },
  ]


  const products =[


    {
        title: 'Chair',
        image: '/product_1.png',
        description:'Sankaris ArmChair',
        price: 222,
        rating: 4.9,
        category: 'chair'
    },
    {
        title: 'Chair',
        image: '/product_2.png',
        description:'baltsar Chair',
        price: 222,
        rating: 4.5,
        category: 'chair'
    },

    {
        title: 'Chair',
        image: '/product_3.png',
        description:'Anjoy Chair',
        price: 222,
        rating: 4.5,
        category: 'chair'
    },
    {
        title: 'Chair',
        image: '/product_4.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'chair'
    },
    {
        title: 'Chair',
        image: '/product_1.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'chair'
    },



    {
        title: 'bed',
        image: '/product_4.png',
        description:'Sankaris ArmChair',
        price: 222,
        rating: 4.9,
        category: 'bed'
    },
    {
        title: 'bed',
        image: '/product_3.png',
        description:'baltsar Chair',
        price: 222,
        rating: 4.5,
        category: 'bed'
    },

    {
        title: 'bed',
        image: '/product_2.png',
        description:'Anjoy Chair',
        price: 222,
        rating: 4.5,
        category: 'bed'
    },
    {
        title: 'bed',
        image: '/product_1.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'bed'
    },
    {
        title: 'bed',
        image: '/product_4.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'bed'
    },
    {
        title: 'bed',
        image: '/product_2.png',
        description:'Anjoy Chair',
        price: 222,
        rating: 4.5,
        category: 'bed'
    },

    {
        title: 'sofa',
        image: '/product_1.png',
        description:'Sankaris ArmChair',
        price: 222,
        rating: 4.9,
        category: 'sofa'
    },
    {
        title: 'sofa',
        image: '/product_2.png',
        description:'baltsar Chair',
        price: 222,
        rating: 4.5,
        category: 'sofa'
    },

    {
        title: 'sofa',
        image: '/product_3.png',
        description:'Anjoy Chair',
        price: 222,
        rating: 4.5,
        category: 'sofa'
    },
    {
        title: 'sofa',
        image: '/product_4.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'sofa'
    },

    {
        title: 'lamp',
        image: '/product_4.png',
        description:'Sankaris ArmChair',
        price: 222,
        rating: 4.9,
        category: 'lamp'
    },
    {
        title: 'lamp',
        image: '/product_3.png',
        description:'baltsar Chair',
        price: 222,
        rating: 4.5,
        category: 'lamp'
    },

    {
        title: 'lamp',
        image: '/product_2.png',
        description:'Anjoy Chair',
        price: 222,
        rating: 4.5,
        category: 'lamp'
    },
    {
        title: 'lamp',
        image: '/product_1.png',
        description:'Nyantuy Chair',
        price: 222,
        rating: 4.5,
        category: 'lamp'
    },
    {
        title: 'lamp',
        image: '/product_4.png',
        description:'Sankaris ArmChair',
        price: 222,
        rating: 4.9,
        category: 'lamp'
    },

  ]

  const filteredProducts = products?.filter((item)=> item?.category === active?.category);

  console.log(filteredProducts);


  return (

    <div className='w-full min-h-[906px] bg-[#f7f7f7] pt-[50px] pb-[120px]'>

      <div className="lg:container mx-auto">

        <div className='flex items-center justify-center w-full mb-8  '>
          <HeaderTitle title={'Best Selling Product'} />
        </div>

        <div className='flex items-center justify-between max-w-[450px]
         w-full h-[57px] rounded-4xl bg-[#eeeeee] p-6 mx-auto'>
          {
            categoriesName?.map((item, index) => (

              <button

                key={index} 
                
          
                onClick= {() => setActive({
                  id: item?.id,
                  category: item?.category
                })} 
                
                className={`text-xl cursor-pointer text-[#1e1e1e] font-medium capitalize 
                  ${active?.id === item?.id ? 'bg-[#a5c515] text-white': 'bg-transparent'} rounded-4xl
                   px-6 py-2 transition-all duration-300`}
              
                >

                {item?.category}
                
                </button>
            ))
          }
        </div>


        <div>

                 <ProductSlider sliderContent={filteredProducts} />
        </div>

      </div>
    </div>
  )
}

export default Product;