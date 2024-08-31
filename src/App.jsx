import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
;

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <NavBar
        handleToggleSidebar={handleToggleSidebar}
        toggleSidebar={toggleSidebar}
        isFeaturesOpen={isFeaturesOpen}
        setIsFeaturesOpen={setIsFeaturesOpen}
        isCompanyOpen={isCompanyOpen}
        setIsCompanyOpen={setIsCompanyOpen}
      />
      <Hero />
    </div>
  );
}

export default App;
