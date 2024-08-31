import React from "react";

export default function DropdownItem({ icon, label }) {
  return (
    <li>
      <a className="flex flex-row items-center gap-3">
        {icon && (<img src={icon} alt="icons" />)}
        {label}
      </a>
    </li>
  );
}
