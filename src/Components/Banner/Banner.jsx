import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/right-img.png";

const Banner = ({tricketstatus,resolved }) => {
  return (
    <div className="lg:container w-full mx-auto py-20 grid md:grid-cols-2 grid-cols-1 gap-8">
      <div className="relative h-60 rounded-xl overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <div
          className="absolute left-0 top-0 h-full w-1/2 bg-no-repeat bg-left bg-contain opacity-50"
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>
<div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-right bg-contain opacity-50"
          style={{ backgroundImage: `url(${vector2})` }}
        ></div>

        <div className="relative flex flex-col items-center justify-center h-full gap-4 ">
          <h4 className="text-center text-white text-2xl">Inprogress</h4>
          <h2 className="text-center text-white text-5xl">{tricketstatus.length}</h2>
        </div>
        {/* <div
          className="absolute h-full w-full inset-0 bg-no-repeat bg-right bg-contain z-10"
          style={{ backgroundImage: `url(${vector2})` }}
        ></div> */}
        
      </div>

      {/* Right side  */}
      <div className="relative h-60 rounded-xl overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
        <div
          className="absolute left-0 top-0 h-full w-1/2 bg-no-repeat bg-left bg-contain opacity-50"
          style={{ backgroundImage: `url(${vector1})` }}
        ></div>
<div
          className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-right bg-contain opacity-50"
          style={{ backgroundImage: `url(${vector2})` }}
        ></div>

        <div className="relative flex flex-col items-center justify-center h-full gap-4 ">
          <h4 className="text-center text-white text-2xl">Resolved</h4>
          <h2 className="text-center text-white text-5xl">{resolved.length}</h2>
        </div>
        {/* <div
          className="absolute h-full w-full inset-0 bg-no-repeat bg-right bg-contain z-10"
          style={{ backgroundImage: `url(${vector2})` }}
        ></div> */}
        
      </div>
    </div>
  );
};

export default Banner;
