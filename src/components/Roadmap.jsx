import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../Constants";
import { check2, grid, loading1 } from "../assets";
import TagLine from "./TagLine";
import { Gradient } from "./design/Roadmap";
import Button from "./Button"
const Roadmap = () => {
  return (
    <Section className={"overflow-hidden"} id={"roadmap"}>
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((v, i) => {
            const status = v.status === "done" ? "Done" : "In Progress";
            return (
              <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                v.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={v.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15 ">
                  <div className="absolute top-0 left-0 max-w-full">
              <Gradient />
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{v.date}</TagLine>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={v.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />

                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={v.imageUrl}
                        width={628}
                        height={426}
                        alt={v.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{v.title}</h4>
                    <p className="body-2 text-n-4">{v.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <Gradient /> */}
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
