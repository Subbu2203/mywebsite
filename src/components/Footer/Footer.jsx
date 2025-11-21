import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router"


const Footer = () => {
  return (
    <div className="w-full bg-[#f7f7f7] min-h-[462px] py-40 px-4 md:px-0">
      <div className="lg:container mx-auto">

        {/* {footer top} */}

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {/* {wrapper one} */}
          <div>
            <Link to={'/'} className="text-2xl text-[#1e1e1e] capitalize font-bold mb-8 block" >Panto</Link>
            <p className="text-base text-[#1e1e1e] font-medium ">The advantage of hiring a workspace with us is that gives you comfortable service and all around facilities</p> 
           </div>
        




        {/* {Wrapper two } */}

        <div className="mx-auto">

          <h4 className="text-lg text-[#e58411] font-medium capitalize mb-5">Services</h4>
          <ul className="space-y-5">

            <li ><Link className="text-sm text-[#1e1e1e] font-normal capitalize" >Email marketing</Link></li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize" >branding </Link></li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize" >Campaigns</Link></li>
          </ul>
        </div>


        {/* {Wrapper Three} */}

        <div className="mx-auto">

          <h4 className="text-lg text-[#e58411] font-medium capitalize mb-5">Furniture</h4>
          <ul className="space-y-5">

            <li ><Link className="text-sm text-[#1e1e1e] font-normal capitalize">beds</Link></li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize" >chair</Link> </li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize" >all</Link></li>
          </ul>


        </div>


        {/* {Wrapper four} */}

        <div className="mx-auto">

          <h4 className="text-lg text-[#e58411] font-medium capitalize mb-5">Follow Us</h4>
          <ul className="space-y-5">

            <li ><Link className="text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3" >Facebook<FaFacebook size={'1rem'} /></Link> </li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3" >Twitter<FaTwitter size={'1rem'} /></Link> </li>
            <li><Link className="text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3" >Instagram<FaInstagram size={'1rem'}/></Link> </li>
          </ul>


        </div>

        </div>

        {/* {footer bottom} */}


        <div className="flex items-center justify-between mt-12">
          <p>Copyright &copy; 2025</p>
          <ul className="flex items-center gap-6  ">

            <li><Link className="text-sm text-[#1e1e1e] font-medium capitalize">Terms &conditions</Link></li>
            <li><Link className="text-sm text-[#1e1e1e] font-medium capitalize">Privacy policy</Link></li>

          </ul>


        </div>

      </div>

    </div>
  )
}

export default Footer