"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="BZABIK.ART home">
        BZABIK<span>.ART</span>
      </Link>
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={navId}
        aria-label={isOpen ? "Close menu" : "Menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "CLOSE" : "MENU"}</span><i aria-hidden="true" />
      </button>
      {isOpen && <SiteNav id={navId} onClose={close} />}
    </header>
  );
}
