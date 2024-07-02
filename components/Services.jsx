"use client";
import { delay, motion } from "framer-motion";
import menu1 from "@/public/assets/menu-1.png";
import menu2 from "@/public/assets/menu-2.png";
import menu3 from "@/public/assets/menu-3.png";
import Image from "next/image";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      menu: "Black Coffee",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: menu1,
    },
    {
      id: 2,
      menu: "Hot Coffee",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: menu2,
    },
    {
      id: 3,
      menu: "Cold Coffee",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: menu3,
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: "150",
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="mx-auto max-w-lg space-y-2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-lightGray text-3xl font-bold"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          velit fugiat et inventore ad? Fugit praesentium nobis placeat quidem
          blanditiis!
        </motion.p>
      </div>
      {/* Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            key={service.id}
            className="space-y-6 p-4 text-center"
          >
            <Image
              className="img-shadow2 mx-auto max-w-[200px] cursor-pointer duration-300 hover:scale-110"
              src={service.img}
              alt={service.menu}
              width={200}
              height={200}
            />
            <div className="space-y-2">
              <h2 className="text-primary text-2xl font-bold">
                {service.menu}
              </h2>
              <p className="text-darkGray">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
