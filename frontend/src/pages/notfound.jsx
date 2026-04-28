import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4 text-black">Page Not Found</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-[#2E7D32] text-white rounded"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;