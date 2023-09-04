import React from "react";
import IconQuote from "../icons/IconQuote";
import { testimonials } from "../utils/data";

const Testimonial = () => {
  return (
    <div id={"testimonials"} className="bg-slate-50 py-10">
      <div className="flex flex-col gap-y-12 container mx-auto my-7 h-full relative layoutWidth">
        <div className="flex flex-col  justify-center items-center gap-y-4">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className=" text-lg tracking-tight text-slate-700 max-w-prose">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="flex flex-row flex-wrap flex-initial gap-y-12 gap-x-10 justify-start items-baseline"
        >
          {testimonials.map((testimonial: any, key: number) => {
            return (
              <li key={testimonial.id} className='flex basis-80'>
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <IconQuote />
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-slate-900 line-clamp-4">
                      {testimonial.comment}
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="mt-1 text-sm text-slate-500">
                        {testimonial.position}
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt={testimonial.name}
                        src={testimonial.img}
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="1"
                        className="h-14 w-14 aspect-square"
                        loading="lazy"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
