// pages/page.tsx or _app.tsx
'use client'

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight;  // Directly get the viewport height in pixels
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Update on initial load
    updateVH();

    // Update on resize
    window.addEventListener('resize', updateVH);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVH);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-800">
      <h1 className="text-white text-4xl text-center">
        This is your page with dynamic viewport resizing!
      </h1>
      {/* Example usage of the --vh variable in pixels */}
      <div className="h-[calc(var(--vh))] bg-blue-500">
        <p className="text-white text-center">
          This element's height adjusts to the viewport height (in pixels).
        </p>
      </div>
    </div>
  );
};

export default Page;
