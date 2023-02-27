import { Link } from "react-router-dom"
import ArrowUp from "../assets/icons/arrow_up_right.svg"

const Card = ({image, title, description, link}) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <img src={image} alt="img" className="rounded-t-md"/>
      </div>
      <div className="font-sans text-lg text-black">{title}</div>
      <div className="font-sans text-sm text-gray-500">{description}</div>
      <div>
        <a href={link} className="flex gap-2 font-sans text-sm">
          Read post
          <span> 
            <img src={ArrowUp} alt="arrow" />
          </span>
        </a> 
      </div>
    </div>
  )
}

export default Card