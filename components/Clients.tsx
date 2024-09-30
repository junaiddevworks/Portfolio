"use client";

import React from "react";
import Image from 'next/image';
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 max-lg:mt-10 mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <div className="relative md:w-10 w-5 h-auto"> 
                <Image
                  src={company.img}
                  alt={company.name}
                  layout="responsive"
                  width={100} // These act as aspect ratios
                    height={100} // Aspect ratio, doesn't force fixed size
                    className="object-contain"
                  
                />
                </div>
                <div className="flex justify-center items-center">
                  {company.name}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
