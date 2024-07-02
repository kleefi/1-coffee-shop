"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ios from "@/public/assets/bg-ios.png";
import android from "@/public/assets/bg-android.png";
import bgDownload from "@/public/assets/bg-download.jpg";
import Link from "next/link";

const bgImage = {
  backgroundImage: `url(/assets/bg-download.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const Download = () => {
  return (
    <div className="container my-14">
      <div
        style={bgImage}
        className="rounded-xl sm:flex sm:min-h-[400px] sm:items-center sm:justify-end"
      >
        <div>
          <div className="mx-auto max-w-xl space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-center text-2xl font-semibold sm:text-4xl"
            >
              Download the app
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, voluptas fuga? Sunt iste cumque molestias temporibus ad
              soluta sapiente rerum!
            </motion.p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                >
                  <Image src={ios} alt="" width={200} height={200} />
                </motion.span>
              </Link>
              <Link
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.5,
                  }}
                >
                  <Image src={android} alt="" width={200} height={200} />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
