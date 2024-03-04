import React from "react";
import pic1 from "../assets/codingclub1.jpg";
import pic2 from "../assets/codingclub2.jpg";
import pic3 from "../assets/codingclub3.jpg";
import pic4 from "../assets/codingclub4.jpg";
import pic5 from "../assets/codingclub5.jpg";

const Pictures = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="flex flex-wrap justify-center -m-1 md:-m-2">
        {[pic1, pic2, pic5].map((pic, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={pic}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
