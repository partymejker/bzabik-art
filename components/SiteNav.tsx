"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "@/lib/navigation";

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

export function SiteNav({ id, onClose }: { id: string; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const elements = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      id={id}
      className="nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      ref={panelRef}
      onClick={onClose}
    >
      <nav onClick={(event) => event.stopPropagation()}>
        <ol className="nav-list">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link className="nav-link" href={item.href} onClick={onClose}>
                <span className="nav-link-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="nav-link-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
