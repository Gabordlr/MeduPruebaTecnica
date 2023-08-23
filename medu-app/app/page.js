"use client"
import MainCards from "@/app/reusables/mainCards";
import Header from "@/app/reusables/header";
import DisplayScreen from "@/app/page/dispplayScreen";
import { useState } from "react";

function Home() {
  const [disPage, setDisPage] = useState(false);

  const handleDisplay = () => {
    setDisPage(true);
  };

  const handleBack = () => {
    setDisPage(false);
  };

  return (
    <main className="flex h-full flex-col items-center bg-gray-900">
      <Header />
      <section className="flex flex-col items-center w-screen bg-gradient-to-r from-[#00aa8b] via-cyan-600 to-sky-600">
        <h1 className="text-3xl self-start p-5 font-bold text-gray-950">
          Popular Titles
        </h1>
      </section>
      {disPage ? (
        <div></div>
      ) : (
        <div className="flex flex-row p-20">
          <MainCards
          onClick = {() => handleDisplay()} />
        </div>
      )}
      {disPage ? 
      <div className="flex flex-col w-full p-5">
      <DisplayScreen />
      <button className="w-10 h-10 m-5" onClick={handleBack}>
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
          </svg>
        </button>
      </div>
       : <></>}
       
    </main>
  );
}

export default Home;