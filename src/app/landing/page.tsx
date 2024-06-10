import React from "react";
import Link from "next/link";


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="absolute mt-24 hover:scale-110">
        <Link className="" href="/home">
          <h1 className="text-xl text-white bg-blue-900 p-3 border rounded-xl">
            VISITAR LA PÁGINA
          </h1>
        </Link>
      </div>
      <div className="">
        <img
          src="/imagenes/landing.png"
          alt="Landing Image"
          className=" h-[599px] w-[1359px]"
        />
      </div>
    </div>
  );
};

export default LandingPage;
