import React from "react";

export default function Navbar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li>
          <a href="/" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="block py-2 px-4 hover:bg-gray-700">
            About
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </aside>
  );
}
