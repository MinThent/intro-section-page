import React from "react";
import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";

export default function NavBar({
  toggleSidebar,
  handleToggleSidebar,
  isFeaturesOpen,
  setIsFeaturesOpen,
  isCompanyOpen,
  setIsCompanyOpen,
}) {
  return (
    <nav className="px-3 md:px-8 py-5 md:py-6">
      {/*large screen menu*/}
      <div className="md:flex flex-row gap-10 hidden">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>

        <ul className="flex flex-row md:gap-5 lg:gap-10">
          <NavItem label={"Features"} />
          <NavItem label={"Companies"} />
          <NavItem label={"Careers"} />
          <NavItem label={"About"} />
        </ul>

        <ul className="flex flex-row gap-10 ml-auto">
          <NavItem label={"Login"} />
          <NavItem label={"Register"} />
        </ul>
      </div>

      {/*hamburger menu*/}

      <div className="flex flex-row md:hidden">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>

        <div className="ml-auto">
          <button className="cursor-pointer" onClick={handleToggleSidebar}>
            <img src="icon-menu.svg" alt="menu" />
          </button>

          {/*Backdrop Shadow*/}

          {toggleSidebar && (
            <div
              className="z-10 fixed inset-0 bg-black opacity-70"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Sidebar Content */}

          {toggleSidebar && (
            <div className="top-0 right-0 z-20 absolute flex flex-col gap-4 bg-white px-3 py-5 w-7/12 min-h-screen">
              <div className="ml-auto">
                <button onClick={handleToggleSidebar}>
                  <img src="icon-close-menu.svg" alt="close menu" />
                </button>
              </div>
              <ul className="flex flex-col gap-4 ml-3">
                <NavItem>
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => setIsFeaturesOpen((prev) => !prev)}
                  >
                    <NavItem label={"Features"} />
                    {!isFeaturesOpen && (
                      <img src="icon-arrow-down.svg" alt="arrow-down-pic" />
                    )}
                    {isFeaturesOpen && (
                      <img src="icon-arrow-up.svg" alt="arrow-up-pic" />
                    )}
                  </div>
                  {isFeaturesOpen && (
                    <ul className="flex flex-col gap-4 ml-6 py-4">
                      <DropdownItem
                        icon={"icon-todo.svg"}
                        label={"Todo List"}
                      />
                      <DropdownItem
                        icon={"icon-calendar.svg"}
                        label={"Calendar"}
                      />
                      <DropdownItem
                        icon={"icon-reminders.svg"}
                        label={"Reminders"}
                      />
                      <DropdownItem
                        icon={"icon-planning.svg"}
                        label={"Planning"}
                      />
                    </ul>
                  )}
                </NavItem>

                <NavItem>
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => setIsCompanyOpen((prev) => !prev)}
                  >
                    <NavItem label={"Company"} />
                    {!isCompanyOpen && (
                      <img src="icon-arrow-down.svg" alt="arrow-down-pic" />
                    )}
                    {isCompanyOpen && (
                      <img src="icon-arrow-up.svg" alt="arrow-up-pic" />
                    )}
                  </div>
                  {isCompanyOpen && (
                    <ul className="flex flex-col gap-4 ml-6 py-4">
                      <DropdownItem label={"History"} />
                      <DropdownItem label={"Our Team"} />
                      <DropdownItem label={"Blog"} />
                    </ul>
                  )}
                </NavItem>

                <NavItem label={"Careers"} />

                <NavItem label={"About"} />
              </ul>
              <ul className="flex flex-col items-center gap-4 py-2">
                <button className="w-5/6">Login</button>
                <button className="p-2 border border-black rounded-xl w-5/6">
                  Register
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
