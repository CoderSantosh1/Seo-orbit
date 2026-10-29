"use client";

import { useEffect, useState } from "react";
import Loader from "./AtomLoader";

interface PageLoaderProps {
  children: React.ReactNode;
}

export default function PageLoader({ children }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}