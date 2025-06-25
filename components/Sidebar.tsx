import React from "react";
import Link from "next/link";

// Define the type for navigation items
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SidebarProps {
  title?: string;
  items: NavItem[];
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  title = "Navigation",
  items,
  className = "",
}) => {
  return (
    <aside className={`sticky top-8 ${className}`}>
      <ul className="space-y-4">
        {/* Title with dot indicator */}
        {title && (
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
            <span>{title}</span>
          </li>
        )}

        {/* Navigation items */}
        {items.map((item) => (
          <li key={item.id} className="ml-5">
            {item.isExternal ? (
              <a
                href={item.href}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
