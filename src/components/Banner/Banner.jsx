import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-6">

      {/* In Progress */}
      <div className="flex-1 rounded-xl p-6 text-white relative h-48 md:h-56 bg-green-500 flex flex-col justify-between">
        <div className="bg-green-600 bg-opacity-50 p-4 rounded">
          <h2 className="text-xl font-bold">In Progress</h2>
          <p className="text-sm mt-2">Tasks currently being worked on</p>
        </div>
        <div className="text-4xl md:text-5xl font-extrabold mt-4">{inProgressCount}</div>
      </div>

      {/* Resolved */}
      <div className="flex-1 rounded-xl p-6 text-white relative h-48 md:h-56 bg-blue-500 flex flex-col justify-between">
        <div className="bg-blue-600 bg-opacity-50 p-4 rounded">
          <h2 className="text-xl font-bold">Resolved</h2>
          <p className="text-sm mt-2">Tasks that have been completed</p>
        </div>
        <div className="text-4xl md:text-5xl font-extrabold mt-4">{resolvedCount}</div>
      </div>

    </section>
  );
};

export default Banner;