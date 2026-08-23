import type { ComponentType, SVGProps } from "react";

export type Accent = "cyan" | "red" | "orange" | "blue";

export type Feature = {
  title: string;
  description: string;
  accent: Accent;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
