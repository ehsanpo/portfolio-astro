import React from "react";
import { motion } from "framer-motion";
import { imageLoader } from "./imageLoader";

interface PortfolioCardProps {
  title: string;
  date: string;
  permalink: string;
  tagline: string;
  background_image: string;
  logo: string;
  category: string[];
  tag: string[];
}

export default function PortfolioCard({
  title,
  date,
  permalink,
  tagline,
  background_image,
  logo,
  category,
  tag,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={`portfolio/${permalink}`}
      className="group block relative overflow-hidden rounded-lg group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
      <img
        src={imageLoader(permalink, background_image)}
        alt={title}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={imageLoader(permalink, logo)}
            alt={`${title} logo`}
            className="w-12  rounded-full"
          />
          <div>
            <h3 className="text-2xl font-basement text-white">{title}</h3>
            <p className="text-primary">{tagline}</p>
          </div>
        </div>
        <div className="group-hover:flex flex-wrap gap-2 mt-4 hidden">
          {category.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-primary/20 rounded-full text-primary text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
