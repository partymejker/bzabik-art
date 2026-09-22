import { navTotal } from "@/lib/navigation";

export function PageCount({ current, total = navTotal }: { current: number; total?: number }) {
  return (
    <p className="page-count" aria-label={`Section ${current} of ${total}`}>
      <span>{String(current).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
    </p>
  );
}
