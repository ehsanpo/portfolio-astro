import React from "react";
import { motion } from "framer-motion";

interface StackCardProps {
  slug: string;
  labels: string[];
  icon: string;
  data: string[];
}

export default function StackCard({
  slug,
  labels,
  icon,
  data,
}: StackCardProps) {
  return (
    <motion.div
      className="bg-dark/50 backdrop-blur-lg rounded-lg p-6"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <img src={icon} alt={slug} className="w-12 h-12" />
        <h3 className="text-xl font-basement">{slug}</h3>
      </div>
      <div className="space-y-4">
        {labels.map((label, index) => (
          <div key={label} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{label}</span>
              <span className="text-primary">{data[index]}/10</span>
            </div>
            <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${Number(data[index]) * 10}%` }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
