"use client";
import Tumbler from "@/public/assets/tumbler.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(/assets/hero-bg.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
console.log(bgImage.backgroundImage);
const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid min-h-[850px] grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
            {/* Text content */}
            <div className="text-lightOrange mt-[100px] space-y-28 p-4 md:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="ml-14 text-8xl font-bold leading-tight"
              >
                Alana Cafe
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                  <h3 className="text-sm leading-loose opacity-55">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestiae accusamus corrupti cumque explicabo in
                    nam cupiditate aperiam eos et!
                  </h3>
                </div>
                <div className="absolute -left-10 -top-6 h-[190px] w-[250px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero section */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
              >
                <Image
                  src={Tumbler}
                  alt="Description of the image"
                  className="img-shadow img-tumbler relative z-40"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="border-primary absolute -right-16 top-24 z-10 h-[180px] w-[180px] rounded-full border-[20px]"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h2 className="text-darkGray/40 scale-150 text-[140px] font-bold leading-none">
                  Alana Cafe
                </h2>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] space-y-28 p-4 md:mt-0"
              >
                <h1 className="ml-14 text-7xl font-bold leading-tight opacity-0">
                  Alana Cafe
                </h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl">Black Lifestyle Lovers</h2>
                    <h3 className="text-sm leading-loose opacity-55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium molestiae accusamus corrupti cumque explicabo
                      in nam cupiditate aperiam eos et!
                    </h3>
                  </div>
                  <div className="bg-darkGray absolute -right-10 -top-6 h-[190px] w-[250px]"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Sidebar menu */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="from-primary/80 to-primaryDark/80 absolute right-0 top-0 z-10 h-full w-[140px] bg-gradient-to-b backdrop-blur-sm"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6 text-white">
                <div className="h-[70px] w-[1px] bg-white"></div>
                <div className="inline-block cursor-pointer rounded-full border border-white p-2">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block cursor-pointer rounded-full border border-white p-2">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block cursor-pointer rounded-full border border-white p-2">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="h-[70px] w-[1px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
