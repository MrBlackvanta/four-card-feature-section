import { ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["heading", "heading-lg", "title", "body", "body-sm"] },
      ],
      tracking: [{ tracking: ["heading", "body"] }],
      shadow: [{ shadow: ["card"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
