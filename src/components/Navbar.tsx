import { Link } from "react-router-dom";

import { routes } from "@/lib/constants";

import { ContainedContent } from "@/components/ContainedContent";

export const Navbar = () => {
  return (
    <ContainedContent className="py-10">
      <div className="flex items-center justify-between text-lg">
        <div>
          <a href={routes[0].href} className="font-semibold">
            LOGO
          </a>
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link key={route.key} to={route.href}>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </ContainedContent>
  );
};
