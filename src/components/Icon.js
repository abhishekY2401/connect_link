

const Icon = ({icon, menu}) => {
  return (
    <div className="flex flex-col items-center justify-center w-28 gap-2">
      <div className="cursor-pointer flex items-center justify-center border-2 p-3 rounded-full bg-gradient-to-br from-white to to-blue-600">
        <img src={icon} alt="icon" className="w-6 h-6" />
      </div>
     <div className="text-white font-sans text-base">{menu}</div>
    </div>
  )
}

export default Icon