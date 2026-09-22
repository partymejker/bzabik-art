export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Profile", href: "/#profile" },
  { label: "Contact", href: "/#contact" },
];

export const navTotal = navItems.length;

export function sectionNumber(href: string): number {
  const index = navItems.findIndex((item) => item.href === href);
  return index >= 0 ? index + 1 : 0;
}
