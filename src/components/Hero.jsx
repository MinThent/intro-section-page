import React from "react";
import LogoBar from "./LogoBar";

export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col-reverse md:gap-10 md:px-16 lg:px-24 md:py-5">
      <article className="flex flex-col justify-center items-center md:items-start gap-5">
        <section className="flex flex-1 flex-col justify-center items-center md:items-start gap-5 lg:gap-12 px-4 pt-10 md:pt-8">
          <h1 className="md:pr-8 lg:pr-24 font-bold text-4xl text-center md:text-left lg:text-7xl">
            Make remote work
          </h1>
          <p className="px-2 md:px-0 lg:pr-24 text-center md:text-left md:text-lg lg:text-xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a
            className="bg-black hover:bg-white px-6 py-3 border border-black rounded-xl font-medium text-sm text-white hover:text-black"
            href="#"
          >
            Learn More
          </a>
        </section>
        <section className="flex justify-center md:justify-start items-start mt-auto">
          <LogoBar />
        </section>
      </article>

      <figure className="">
        <img
          className="block md:hidden w-full h-auto"
          src="image-hero-mobile.png"
        />
        <img
          className="md:block hidden w-full h-auto"
          src="image-hero-desktop.png"
        />
      </figure>
    </section>
  );
}
