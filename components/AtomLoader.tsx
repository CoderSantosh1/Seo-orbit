"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="relative h-24 w-24 animate-[spin_3s_linear_infinite]">
        <div className="absolute left-1/2 top-1/2 h-24 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[50%] border-[1.5px] border-[#ff5533]" />

        <div className="absolute left-1/2 top-1/2 h-24 w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[50%] border-[1.5px] border-[#ff5533]" />

        <div className="absolute left-1/2 top-1/2 h-24 w-10 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[1.5px] border-[#ff5533]" />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5533]" />

        <span className="absolute left-[18px] top-[25px] h-2 w-2 rounded-full bg-[#ff5533]" />

        <span className="absolute right-[17px] top-[22px] h-2 w-2 rounded-full bg-[#ff5533]" />

        <span className="absolute bottom-[17px] right-[18px] h-2 w-2 rounded-full bg-[#ff5533]" />

        <span className="absolute bottom-[18px] left-[20px] h-2 w-2 rounded-full bg-[#ff5533]" />
      </div>
    </div>
  );
}