import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PortfolioFilterProps {
  categories: string[];
}

export default function PortfolioFilter({ categories }: PortfolioFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterPortfolio = (category: string) => {
    setSelectedCategory(category);
    const portfolioCards = document.querySelectorAll("[data-categories]");
    console.log("portfolioCards", portfolioCards);

    portfolioCards.forEach((card) => {
      const categories = JSON.parse(
        card.getAttribute("data-categories") || "[]"
      );

      if (category === "all" || categories.includes(category)) {
        (card as HTMLElement).style.display = "block";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <motion.button
        onClick={() => filterPortfolio("all")}
        className={clsx(
          "px-4 py-2 rounded-full transition-colors",
          selectedCategory === "all"
            ? "bg-primary text-dark"
            : "bg-dark/50 text-light hover:bg-dark/70"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => filterPortfolio(category)}
          className={clsx(
            "px-4 py-2 rounded-full transition-colors",
            selectedCategory === category
              ? "bg-primary text-dark"
              : "bg-dark/50 text-light hover:bg-dark/70"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
