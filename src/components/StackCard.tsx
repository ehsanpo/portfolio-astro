import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";

interface StackCardProps {
  slug: string;
  labels: string[];
  icon: string;
  data: string[];
  parentIndex: number;
}

export default function StackCard({
  slug,
  labels,
  icon,
  data,
  parentIndex,
}: StackCardProps) {
  const colors = [
    "from-primary/50 to-primary",
    "from-primary/50 to-primary",
    "from-primary/50 to-primary",

    "from-blue/50 to-blue ",
    "from-blue/50 to-blue ",
    "from-blue/50 to-blue ",

    "from-blue/50 to-tertiary ",
    "from-blue/50 to-tertiary ",
    "from-blue/50 to-tertiary ",
  ];

  // bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient
  //bg-gradient-to-t ${colors[parentIndex]}
  return (
    <motion.div className={` rounded-lg  `} whileHover={{ scale: 1.02 }}>
      <MagicCard
        className="bg-dark/50  px-6 pt-10 pb-6 clip backdrop-blur-lg cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap "
        gradientColor={"#000"}
      >
        <div className="flex items-center gap-4 mb-6">
          <img src={icon} alt={slug} className="w-12 h-12" />
          <h3 className="text-xl font-basement">{slug}</h3>
        </div>
        <div className="space-y-4">
          {labels.map((label, index) => (
            <div key={label} className="relative ">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{label}</span>
                <span className="text-primary">{data[index]}/10</span>
              </div>
              <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${colors[parentIndex]}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Number(data[index]) * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </MagicCard>
    </motion.div>
  );
}
