import { Link, useLocation } from "react-router-dom";

import { routes } from "@/lib/constants";

import { ContainedContent } from "@/components/ContainedContent";
import { classMerge } from "@/lib/utils";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <ContainedContent>
      <div className="flex h-24 items-center justify-between text-lg">
        <div>
          <Link to={routes[0].href} className="font-semibold">
            LOGO
          </Link>
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link
              key={route.key}
              to={route.href}
              className={classMerge(
                "transition-all duration-500 hover:font-semibold",
                pathname === route.href && "font-semibold",
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </ContainedContent>
  );
};
