import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#080D18]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">Movec</span>{" "}
          <span className="text-[#10B982]">Connect</span>
        </h1>

        {/* Spinner */}
        <div className="relative mt-8 h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-orange-500 border-r-[#10B982]"></div>
        </div>

        <p className="mt-6 text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;