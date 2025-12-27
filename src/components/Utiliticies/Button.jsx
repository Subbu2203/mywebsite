import { BsArrowUpRight } from "react-icons/bs";

const Button=({content})=> {
  return (
    <button className="flex items-center gap-4 text-base cursor-pointer text-[#e58411]">

        {content} <BsArrowUpRight size={'1.5rem'} color='#e58411' /> 
    </button>
  )
}

export default Button;