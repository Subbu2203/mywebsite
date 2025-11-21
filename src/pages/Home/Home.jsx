import Banner from "../../components/Banner/Banner";
import Choose from "../../components/Choose/Choose";
import Experience from "../../components/Experience/Experience";
import Materials from "../../components/Materials/Materials";
import Product from "../../components/Product/Product";
import Testimonials from "../../components/Testimonials/Testimonials";
import HeaderTitle from "../../components/Utiliticies/Headertitle/HeaderTitle";


const Home = () => {
    return (


        <div>
            {/* {banner section} */}
            <div>

                <Banner />
            </div>


            {/* {choose section} */}
            <div className="px-4"> 

                <Choose  />
            </div>

             {/* {Product section} */}
             <div className="px-4">

                <Product />
            </div>


            {/* {experience section} */}
            <div className="px-4">

                <Experience />
            </div >

              {/* {Materials section} */}
            <div className="px-4">

                <Materials/>
            </div >

              {/* {TEstimoinals section} */}
            <div className="px-4">

                <Testimonials/>
            </div>





        </div>





    )
}

export default Home;