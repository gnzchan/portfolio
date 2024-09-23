import { ContainedContent } from "@/components/ContainedContent";
import { routes } from "@/lib/constants";

export const Navbar = () => {
  return (
    <ContainedContent className="py-10">
      <div className="flex items-center justify-between text-lg">
        <div>
          <a href={routes[0].href} className="font-semibold">
            CHAN GONZALES
          </a>
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <a href={route.href}>{route.label}</a>
          ))}
        </div>
      </div>
    </ContainedContent>
  );
};
