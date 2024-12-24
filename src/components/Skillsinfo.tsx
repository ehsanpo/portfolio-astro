import React from "react";

const SkillsInfo = ({ show }: { show?: boolean }) => {
  return (
    <div className="flex justify-center ">
      <div className="relative inline-block group text-left m-auto">
        <button className="relative px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity"></div>

          <span className="relative flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </button>

        <div className="clip absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mx-6 w-[400px] transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
          <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
            <ul className="space-y-2">
              <li>
                <span className="text-indigo-400 font-basement">1–3</span>: I’ve
                experimented and built something basic for personal use.
              </li>
              <li>
                <span className="text-indigo-400 font-basement">4–6</span>: I’ve
                worked with it professionally and deployed it to production.
              </li>
              <li>
                <span className="text-indigo-400 font-basement">7–9</span>: I
                have several years of experience, regularly working with it in
                production environments.
              </li>
              <li>
                <span className="text-indigo-400 font-basement">10</span>: I’m
                highly confident, capable of mentoring others, and comfortable
                making architectural decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
