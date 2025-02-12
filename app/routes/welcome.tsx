import React from "react";

export default function Welcome() {
  return (
    <div className="flex  justify-center  text-white">
      <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Welcome to My Poke-App
        </h1>
        <p className="text-lg">
          Feel free to explore the different options in the menu and discover
          your favorite Pokémon!
        </p>
      </div>
    </div>
  );
}
