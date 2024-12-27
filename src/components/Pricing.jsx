import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id={"pricing"}>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="gool"
          />

          <div className="absolute top-[50%] left-[50%] w-[60rem] -translate-x-[50%] -translate-y-[50%] pointer-events-none">
            <img
              src={stars}
              alt="star"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
            {/* <PircingList/> */}

        </div>
      </div>
    </Section>
  );
};

export default Pricing;
