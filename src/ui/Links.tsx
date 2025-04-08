import { Link } from "react-router";

interface LinksProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function Links({ to, children, className }: LinksProps) {
  return (
    <Link
      className={`${className} transition-colors duration-300 text-sm capitalize font-vietnam font-medium gap-2 backdrop-blur-custom px-8 text-nowrap py-4 pointer-events-auto outline outline-accent flex items-center hover:outline-accent`}
      to={to}
      target="_blank"
    >
      {children}
    </Link>
  );
}
