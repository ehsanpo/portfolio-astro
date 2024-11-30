import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  title: string;
  img: string;
  short: string;
  desc: string;
}

export default function TestimonialCard({
  name,
  title,
  img,
  short,
  desc,
}: TestimonialProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className="bg-primary/10 backdrop-blur-lg rounded-lg px-6 pt-10 pb-6 cursor-pointer clip"
      whileHover={{ scale: 1.02 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-basement">{name}</h3>
          <p className="text-primary">{title}</p>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "100px" }}
        className="overflow-hidden"
      >
        <p className="text-gray-300">{isExpanded ? desc : short}</p>
      </motion.div>
      <button
        className="mt-4 text-primary hover:text-white transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </motion.div>
  );
}
