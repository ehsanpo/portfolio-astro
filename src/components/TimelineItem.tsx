import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  link?: string;
}

export default function TimelineItem({
  title,
  description,
  date,
  link,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l border-primary "
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full" />
      <div className="bg-dark/30 backdrop-blur-sm rounded-lg p-6 clip">
        <span className="text-primary text-sm">{date}</span>
        <h3 className="text-xl font-basement mt-2">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        {link && (
          <a
            href={link}
            className="text-primary hover:text-white transition-colors mt-2 inline-block"
          >
            Learn more →
          </a>
        )}
      </div>
    </motion.div>
  );
}
