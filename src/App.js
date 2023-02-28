import Sidebar from "./Sidebar";
import Main from "./pages/Main";
import Posts from "./pages/Post"
import Apps from "./pages/Apps";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex bg-gray-50">
      <Sidebar/>
      
      <div className="flex flex-col">
       <Main />
       <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/apps" element={<Apps/>} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
