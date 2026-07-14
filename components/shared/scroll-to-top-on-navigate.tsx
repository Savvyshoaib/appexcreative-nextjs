"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Resets window scroll whenever the App Router pathname changes. */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
