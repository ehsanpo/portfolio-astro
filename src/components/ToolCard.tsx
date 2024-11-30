import React from "react";
import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
}

export default function ToolCard({
  name,
  icon,
  description,
  proficiency,
}: ToolCardProps) {
  return (
    <motion.div
      className="bg-dark/50 backdrop-blur-lg rounded-lg p-6"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={icon} alt={name} className="w-12 h-12" />
        <h3 className="text-xl font-basement">{name}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      {/* <div className="relative">
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">Proficiency</span>
          <span className="text-primary">{proficiency}/10</span>
        </div>
        <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency * 10}%` }}
            viewport={{ once: true }}
          />
        </div>
      </div> */}
    </motion.div>
  );
}
