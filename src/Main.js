import Search from "./assets/icons/search.svg";
import Users from "./assets/icons/users_white.svg";
import Grid from "./assets/icons/grid.svg";
import Tools from "./assets/icons/tool.svg";
import Calendar from "./assets/icons/calendar.svg";
import BriefCase from "./assets/icons/briefcase.svg";
import Cart from "./assets/icons/shopping_cart.svg";
import Post from "./Post";
import Icon from "./components/Icon";

const Main = () => {
  return (
    <div className="w-11/12 p-5">
      <div className="flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg h-64">
       <div className="text-white text-xl">Explore</div>
        <div className="bg-white p-2 rounded-lg flex items-center justify-center">
          <div className="w-6 flex items-center justify-center">
            <img src={Search} alt="search" />
          </div>
          
          <input type="search" placeholder="Search" className="ml-3 outline-0 w-96 text-base"/>
       </div>
       <div className="flex justify-center items-center">
         <Icon icon={Users} menu="Freelancers" />
         <Icon icon={Grid} menu="Apps" />
         <Icon icon={Tools} menu="Services" />
         <Icon icon={Calendar} menu="Events" />
         <Icon icon={BriefCase} menu="Jobs" />
         <Icon icon={Cart} menu="Marketplace" />
       </div>
      </div>

      <div>
       <Post />
      </div>
    </div>
  )
}

export default Main