import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import "../src/css/app.scss"
import { useState } from "react";
import { Dashboard  } from "./component/Dashboard ";

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div className="main-body">
      <Sidebar/>

      <div className="main-content">
        <Navbar />
        <div className="content">
         <Dashboard  />
        </div>
      </div>
    </div>
  )
}

export default App
