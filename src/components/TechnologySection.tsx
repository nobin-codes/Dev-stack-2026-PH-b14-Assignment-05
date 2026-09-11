import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import technologiesData from "../data/technologies.json";
import type { Technology } from "../types/technology";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export default function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 400));

        setTechnologies(technologiesData as Technology[]);
      } catch (error) {
        console.error("Failed to load technologies:", error);
        toast.error("Could not load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="border-t border-gray-50 px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore the <span className="gradient-text">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-5 lg:grid-cols-[1fr_190px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
}
