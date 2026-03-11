import React from "react";
import Magnetic from "./global/Magnetic";

export default function Hero() {
  return (
    // container is relative so we can absolutely position text over the image
    <div className="relative overflow-x-hidden flex justify-center items-center w-full min-h-[100vh] p-4">
      <div className="heroImage w-200 -mt-60">
        <img
          src="https://res.cloudinary.com/dicrvjstp/image/upload/v1773253593/rbr_wriul2.png"
          alt="RBR - Software Engineer"
          // mx-auto is a backup for horizontal centering
          className="max-w-4xl w-full h-auto"
        />
      </div>

      {/* left/right overlay text */}
      <div className="absolute left-1/5 top-50 transform -translate-y-1/2">
        <Magnetic strength={2}>
          <h1 className="text-2xl md:text-3xl whitespace-nowrap cursor-pointer">
            A Junior
          </h1>
        </Magnetic>
      </div>
      <div className="absolute right-1/5 top-50 transform -translate-y-1/2">
        <Magnetic strength={2}>
          <h1 className="text-2xl md:text-3xl whitespace-nowrap text-right cursor-pointer">
            Software Engineer
          </h1>
        </Magnetic>
      </div>
    </div>
  );
}
