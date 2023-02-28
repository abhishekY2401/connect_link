
const AppView = ({image, name, desc}) => {
  return (
    <div>
      <div className="flex gap-4 p-5 w-96 border-2 border-blue-200 rounded-lg">
          <div>
            <img src={image} alt="catalog" />
          </div>
          <div className="font-sans flex flex-col">
            <div>{name}</div>
            <div>{desc}</div>
          </div>
        </div>
    </div>
  )
}

export default AppView