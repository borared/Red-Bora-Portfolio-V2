import React from "react";

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
      <h1 className="absolute left-1/5 top-50 transform -translate-y-1/2 text-2xl md:text-3xl whitespace-nowrap">
        A Junior
      </h1>
      <h1 className="absolute right-1/5 top-50 transform -translate-y-1/2 text-2xl md:text-3xl whitespace-nowrap text-right">
        Software Engineer
      </h1>
    </div>
  );
}
