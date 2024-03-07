'use client';
import Image from "next/image";
import bgMobile from "./../../public/static/images/pattern-bg-mobile.png"

export default function Home() {
  return (
   <>
    <section id="background" className="absolute top-0 h-screen w-full -z-10">
      {/* bg image visible in mobile view */}
      <Image src={bgMobile} />
      <section id="mapDisplay">
        {/* put interactive map here */}
      </section>
    </section>
    <main id="searchSection">
      <h1>IP Address Tracker</h1>
      <input />
      <section id="ipDetails">
        {/* put details for ip address here */}
      </section>
    </main>
   </> 
  );
}
