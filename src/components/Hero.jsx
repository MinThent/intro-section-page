import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse">
      <article className="flex flex-col justify-center items-center gap-5 px-4 py-10">
        <h1 className="font-bold text-4xl text-center">Make remote work</h1>
        <p className="text-center">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a className="bg-black px-5 py-3 rounded-xl font-medium text-sm text-white" href="#">Learn More</a>
        
      </article>
      <figure>
        <img className="block md:hidden w-full h-auto" src="image-hero-mobile.png" />
        <img className="md:block hidden w-full h-auto" src="image-hero-desktop.png" />
      </figure>
    </section>
  );
}
