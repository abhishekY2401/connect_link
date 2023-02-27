import ConnectLink from "./assets/logo.svg";
import Search from "./assets/icons/search.svg";
import Section from "./components/Section";
import Home from "./assets/icons/home.svg";
import Dashboard from "./assets/icons/bar_chart.svg";
import Profile from "./assets/icons/user.svg";
import Messages from "./assets/icons/message.svg";
import Connections from "./assets/icons/users.svg";
import Promotions from "./assets/icons/tag.svg";
import Integrations from "./assets/icons/3_layers.svg";
import Headphone from "./assets/icons/headphone.svg";
import Settings from "./assets/icons/settings.svg";


const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white p-5">
     <div className="mt-5">
       <div className="flex items-center gap-2">
         <img src={ConnectLink} alt="logo" />
         <div>
            <span className="text-2xl font-display">Connect</span>&nbsp;&nbsp;
            <span className="text-2xl text-gray-300">link</span>
         </div>
       </div>
     </div>
     <div className="search">
      <div className="flex h-10 w-60 mt-6 border-2 border-slate-200 rounded-lg">
        <div className="cursor-pointer flex items-center w-12 justify-center">
          <img src={Search} alt="search" />
        </div>
       <input type="search" placeholder="Search" className="outline-0 text-base"/>
      </div>
     </div>
     <div className="mt-6">
      <Section icon={Home} section="Home" />
      <Section icon={Dashboard} section="Dashboard" />
      <Section icon={Profile} section="Profile" />
      <Section icon={Messages} section="Messages" />
      <Section icon={Connections} section="Connections" />
      <Section icon={Promotions} section="Promotion & Advertising" />
      <Section icon={Integrations} section="Integrations" />
     </div>

     <div className="mt-24">
       <div>
        <Section icon={Headphone} section="Headphone" />
        <Section icon={Settings} section="Settings" />
       </div>
       <hr className="mt-2"/>
       <div> 
        <div></div>
       </div>
     </div>
    </div>
  )
}

export default Sidebar