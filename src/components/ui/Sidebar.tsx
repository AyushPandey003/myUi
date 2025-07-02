import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ViewColumnsIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/solid";

const components = [
  { name: "Home", href: "/components", icon: HomeIcon },
  { name: "3D Carousel", href: "/components/carousel", icon: ViewColumnsIcon },
  { name: "3D Slider", href: "/components/slider", icon: AdjustmentsHorizontalIcon },
  { name: "3D Button", href: "/components/button3d", icon: AdjustmentsHorizontalIcon },
  { name: "3D Toggle Switch", href: "/components/toggle-switch", icon: AdjustmentsHorizontalIcon },
  // Add other components here as you create them
];

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <aside className="flex h-full w-72 flex-col bg-slate-900/70 backdrop-blur-lg border-r border-slate-700">
      {/* Mobile close button */}
      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5 lg:justify-center">
        <div className="flex items-center gap-x-4">
          <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold">3D</div>
          <h1 className="text-xl font-bold text-white">3D UI Spark</h1>
        </div>
        {onClose && (
          <button
            type="button"
            className="text-slate-300 hover:text-white lg:hidden"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}
      </div>
      
      <nav className="flex-1 px-6 py-6">
        <ul role="list" className="space-y-2">
          {components.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                end={item.href === "/components"}
                onClick={onClose} // Close sidebar on mobile when item is clicked
                className={({ isActive }) =>
                  `group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto border-t border-slate-700 p-6">
        <a
          href="#" // Placeholder for your GitHub link
          className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          <CodeBracketIcon className="h-6 w-6 shrink-0" />
          GitHub
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
