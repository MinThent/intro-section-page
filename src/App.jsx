import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
        isFeaturesOpen={isFeaturesOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}
        isCompanyOpen={isCompanyOpen}
        setIsCompanyOpen={setIsCompanyOpen}
      />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
