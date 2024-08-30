import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
      />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
