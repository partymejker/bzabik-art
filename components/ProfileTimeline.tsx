import type { TimelineEntry } from "@/lib/types";

function formatDate(value: string) {
  if (value === "present") return "Present";
  const [year, month] = value.split("-");
  return `${month}/${year}`;
}

export function ProfileTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="timeline-list">
      {entries.map((entry) => (
        <li key={entry.id} className="timeline-entry">
          <div className="timeline-entry-date">
            {formatDate(entry.startDate)} – <span className={entry.endDate === "present" ? "is-current" : undefined}>{formatDate(entry.endDate)}</span>
          </div>
          <div className="timeline-entry-body">
            <h3 className="timeline-entry-org">{entry.organization}</h3>
            <p className="timeline-entry-role">{entry.role}</p>
            {entry.summary && <p className="timeline-entry-summary">{entry.summary}</p>}
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="timeline-highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <p className="timeline-highlight-title">{highlight.title}</p>
                    <p className="timeline-highlight-desc">{highlight.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
