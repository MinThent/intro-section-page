import React from "react";

export default function LogoBar() {
  return (
    <footer className="justify-start mx-auto mt-6 md:mt-8">
      <ul className="flex flex-row justify-center items-center gap-3 lg:gap-10 px-4 py-2 md:p-0 max-w-fit">
        <li>
          <img src="client-databiz.svg" alt="databiz logo" />
        </li>
        <li>
          <img src="client-audiophile.svg" alt="audiophile logo" />
        </li>
        <li>
          <img src="client-meet.svg" alt="meet logo" />
        </li>
        <li>
          <img src="client-maker.svg" alt="maker logo" />
        </li>
      </ul>
    </footer>
  );
}
