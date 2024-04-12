'use client';
import Image from "next/image";
import bgMobile from "./../../public/static/images/pattern-bg-mobile.png";
import bgDesktop from "./../../public/static/images/pattern-bg-desktop.png";
import MapDisplay from "./mapdisplay";

export default function Home() {
  return (
   <>
    <section id="background" className="absolute top-0 h-screen w-full -z-10">
      {/* bg image visible in mobile view */}
      <Image src={bgMobile} />
      <section id="mapDisplay" className="h-[55vh]">
        <MapDisplay />
      </section>
    </section>
    <main id="searchSection">
      <div className="w-full flex flex-col justify-center  items-center h-[20vh]">
        <h1 className="text-white text-2xl">IP Address Tracker</h1>
        <div id="inputContainer" className="flex">
          <input className="text-3xl" />
          <button>aa</button>
        </div>
      </div>
      
      <section id="ipDetails">
        {/* put details for ip address here */}
      </section>
    </main>
   </> 
  );
}
