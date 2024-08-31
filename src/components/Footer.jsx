import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto">
      <ul className="flex flex-row justify-center items-center gap-5 px-4 py-8 max-w-fit">
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
