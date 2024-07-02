"use client";
import area from "@/public/assets/map.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Area = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-3">
        {/* Form */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-darkGray font-serif text-4xl font-bold"
          >
            Buy our products from anywhere
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="number"
              placeholder="Zip Code"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* Maps */}
        <div className="col-span-2">
          <Image
            className="mx-auto w-full sm:w-[500px]"
            src={area}
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Area;
