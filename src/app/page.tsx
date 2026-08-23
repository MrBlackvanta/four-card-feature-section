import FeatureCard from "@/components/feature-card";
import Attribution from "@/components/layout/attribution";
import { features } from "@/data/data";

const PLACEMENT = [
  "md:col-span-2 lg:col-span-1 lg:row-span-2 lg:self-center",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:self-center",
];

export default function Page() {
  return (
    <>
      <main className="flex-1 px-7.5 pt-14 pb-20 md:pt-20 lg:py-25.5">
        <div className="mx-auto max-w-79 text-center md:max-w-135">
          <h1 className="text-heading tracking-heading md:text-heading-lg">
            <span className="block font-extralight">
              Reliable, efficient delivery
            </span>
            <span className="block font-semibold">Powered by Technology</span>
          </h1>
          <p className="mt-4">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <ul className="mx-auto mt-15 grid max-w-78.5 gap-8 md:mt-18.5 md:max-w-165 md:grid-cols-2 lg:max-w-278.5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <li key={feature.title} className={PLACEMENT[index]}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </main>
      <footer className="absolute inset-x-0 bottom-0">
        <Attribution />
      </footer>
    </>
  );
}
