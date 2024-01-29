"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const initPreline = async () => {
      // Import the preline library
      const preline = await import("preline/preline");

      // Check if HSStaticMethods exists before calling autoInit
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [path]);

  return null;
}
