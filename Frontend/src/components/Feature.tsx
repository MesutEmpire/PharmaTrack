import React from "react";
import { features } from "../utils/data";

const Feature = () => {
  return (
    <div id="features" className=" bg-slate-900 text-white min-h-[46rem] py-10">
      <div className="flex flex-col gap-y-12 container mx-auto my-7 h-full relative layoutWidth">
        <div className="flex flex-col  justify-center items-center gap-y-4">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl max-w-prose">
            Simplify everyday business tasks.
          </h2>
          <p className="text-lg tracking-tight max-w-prose">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <div className="flex flex-row flex-wrap flex-initial gap-12 justify-center items-baseline">
          {features.map((feature: any, key: number) => {
            return (
              <div
                className="flex flex-col justify-center items-center border border-secondary rounded-xl shadow-xl hover:shadow-secondary hover:translate-y-2 px-4 py-16 max-w-sm group "
                key={feature.id}
              >
                  <div className="w-9 rounded-lg bg-secondary flex justify-center">
                    {<feature.icon />}
                  </div>
                  <h3 className="mt-6 text-2xl text-white font-semibold">
                    {feature.type}
                  </h3>
                  <p className="mt-2 text-xl max-w-prose line-clamp-1 group-hover:line-clamp-none"> {feature.title}</p>
                  <p className="mt-4 text-sm max-w-prose line-clamp-3 ">{feature.description}</p>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
