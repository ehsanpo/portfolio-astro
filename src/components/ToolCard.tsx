import React from "react";
import { motion } from "framer-motion";
import BoxReveal from "@/components/ui/box-reveal";

interface ToolCardProps {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
  index: number;
}

export default function ToolCard({
  name,
  icon,
  description,
  index,
  proficiency,
}: ToolCardProps) {
  return (
    <motion.div
      className="bg-dark/50 backdrop-blur-lg rounded-lg p-6"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <BoxReveal
          boxColor="bg-purple-500"
          duration={0.5}
          delay={(index % 3) * 0.2}
        >
          <img src={icon} alt={name} className="w-12 h-12" />
        </BoxReveal>
        <BoxReveal
          boxColor="bg-purple-500"
          duration={0.5}
          delay={(index % 3) * 0.2}
        >
          <h3 className="text-xl font-basement">{name}</h3>
        </BoxReveal>
      </div>
      <BoxReveal
        boxColor="bg-purple-500"
        duration={0.5}
        delay={(index % 3) * 0.2}
      >
        <p className="text-gray-300 mb-4">{description}</p>
      </BoxReveal>
    </motion.div>
  );
}
