import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="flex min-h-[300px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-gray-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 min-h-[58px] text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 text-[10px] text-gray-500">
        <span className="rounded bg-gray-50 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="font-medium text-amber-500">
          ★ {technology.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-auto w-full rounded-md py-2.5 text-xs font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-300 text-gray-600"
            : "cursor-pointer bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}