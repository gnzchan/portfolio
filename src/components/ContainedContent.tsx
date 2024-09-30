import { ReactNode } from "react";

import { classMerge } from "@/lib/utils";

const ContainedContent = ({
  id,
  className,
  children,
  style,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      id={id}
      className={classMerge("flex items-center justify-center", className)}
      style={style}
    >
      <div className="w-full max-w-[1200px] px-12">{children}</div>
    </div>
  );
};

export { ContainedContent };
