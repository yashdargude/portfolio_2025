"use client";

import BoxReveal from "../ui/boxreveal";

export default function Quote() {
  return (
    <section className="w-full pt-24 md:pt-80 pb-24 md:pb-36">
      <BoxReveal>
        <h3 className="w-full text-xl md:text-3xl text-center font-thin">
          “Coming together is a beginning. Keeping together is progress. Working
          together is success.”
        </h3>
      </BoxReveal>
      <div className="flex justify-end pr-16 pt-4">
        <BoxReveal >
          <span className="text-lg md:text-2xl text-primary font-medium tracking-wide">
            -Henry Ford
          </span>
        </BoxReveal>
      </div>
    </section>
  );
}
