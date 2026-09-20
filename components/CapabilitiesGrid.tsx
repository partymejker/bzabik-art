import type { CapabilityGroup } from "@/lib/types";

export function CapabilitiesGrid({ groups }: { groups: CapabilityGroup[] }) {
  return (
    <div className="capability-groups">
      {groups.map((group) => (
        <div key={group.id}>
          <p className="capability-group-label">{group.label}</p>
          <ul className="capability-group-items">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
