import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);x
  };

  return (
    <div className="p-0 min-h-screen">
      <NavBar
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
      />
      <Hero />
    </div>
  );
}

export default App;
