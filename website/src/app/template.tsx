"use client";

import { useEffect, useState } from "react";
import styles from "./template.module.scss";

interface TemplateProps {
  children: React.ReactNode;
}

/** Template avec animation de transition entre les pages. */
export default function Template({ children }: TemplateProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.pageTransition} ${isVisible ? styles.visible : ""}`}>
      {children}
    </div>
  );
}
