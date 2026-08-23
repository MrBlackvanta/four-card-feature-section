import type { Accent, Feature } from "@/data/data.types";

const ACCENT: Record<Accent, string> = {
  cyan: "border-t-accent-cyan",
  red: "border-t-accent-red",
  orange: "border-t-accent-orange",
  blue: "border-t-accent-blue",
};

export default function FeatureCard({
  title,
  description,
  accent,
  icon: Icon,
}: Feature) {
  return (
    <article
      className={`mx-auto h-full min-h-62.5 w-full max-w-78.5 rounded-lg border-t-4 bg-white px-8 pt-7 pb-8 shadow-card lg:max-w-none ${ACCENT[accent]}`}
    >
      <h2 className="text-title font-semibold tracking-normal">{title}</h2>
      <p className="mt-1.5 text-body-sm text-grey-400">{description}</p>
      <Icon className="mt-8 ml-auto block size-16" />
    </article>
  );
}
