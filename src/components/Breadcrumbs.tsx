import Link from "next/link";

interface Crumb { label: string; href: string }
interface BreadcrumbsProps { items: Crumb[] }

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-medium text-white/60">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true" className="text-white/30">/</span>}
            {i === items.length - 1 ? (
              <span className="text-white/70">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-white/80 transition-colors">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
