import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-white px-6">
      <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          About the Creators
        </h1>
        <p className="text-lg text-gray-700">
          This project was created with ❤️ by passionate Pokémon fans. Our goal
          is to bring a fun and interactive experience to all trainers!
        </p>
        <p className="mt-4 text-gray-500">Stay tuned for more updates!</p>
      </div>
    </div>
  );
}
