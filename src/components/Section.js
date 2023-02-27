
const Section = ({icon, section}) => {

  return (
    <div className="cursor-pointer flex items-center gap-2 p-2">
      <img src={icon} alt="icon" />
      <div className="font-sans text-base text-gray-700">{section}</div>
    </div>
  )
}

export default Section