import React from "react";

export default function NavItem({ label, children }) {
  return (
    <li>
      <a>
        {children && children}

        {label}
      </a>
    </li>
  );
}
