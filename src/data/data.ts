import {
  CalculatorIcon,
  KarmaIcon,
  SupervisorIcon,
  TeamBuilderIcon,
} from "@/components/icons";
import type { Feature } from "./data.types";

export const features: Feature[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    accent: "cyan",
    icon: SupervisorIcon,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    accent: "red",
    icon: TeamBuilderIcon,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    accent: "orange",
    icon: KarmaIcon,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    accent: "blue",
    icon: CalculatorIcon,
  },
];
