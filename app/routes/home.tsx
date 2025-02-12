import type { Route } from "./+types/home";
import { Link, Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PokemonApp React Router" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-500 to-yellow-500 shadow-md p-4 flex justify-between items-center text-white z-10">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-200 transition"
        >
          🎮 Poke-App
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="search"
              className="hover:text-yellow-200 font-semibold transition"
            >
              🔍 Search Pokémon
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="hover:text-yellow-200 font-semibold transition"
            >
              ℹ️ About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {" "}
        {/* Add padding to prevent content from being hidden behind the navbar */}
        {/* Render the child route */}
        <Outlet />
      </div>
    </>
  );
}
