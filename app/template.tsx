"use client";

import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Navbar from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";

type transitionProps = {
  children: React.ReactNode;
};

export default function Template({ children }: transitionProps) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    //  else {
    //   slideControls.start("hidden");
    //   mainControls.start("hidden");
    // }
  }, [isInView, mainControls, slideControls]);
  return (
    <>
      <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Navbar />
          <main className="px-6 md:px-12 lg:px-24 pt-12 mx-auto">
            {children}
          </main>
          <Footer />
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="slideIn"
        />
        {/* <motion.div
          className="slideIn"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slideOut"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        /> */}
      </div>
    </>
  );
}
