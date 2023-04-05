import React from "react";
import { features } from "../utils/data";

const Feature = () => {
  return (
    <div id="features" className=" bg-slate-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight ">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <div className="-mx-4 mt-20 grid grid-cols-3 gap-x-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 py-12">
          {features.map((feature: any, key: number) => {
            return (
              <div
                className="flex justify-center items-center border border-secondary rounded-xl shadow-xl hover:shadow-secondary hover:translate-y-2 px-4 py-16 "
                key={feature.id}
              >
                <div className="mx-auto max-w-2xl">
                  <div className="w-9 rounded-lg bg-secondary flex justify-center">
                    {<feature.icon />}
                  </div>
                  <h3 className="mt-6 text-2xl text-white font-semibold">
                    {feature.type}
                  </h3>
                  <p className="mt-2 text-xl "> {feature.title}</p>
                  <p className="mt-4 text-sm ">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
