import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="mb-5">
        <h2 className="text-base font-bold text-gray-900">Your Stack</h2>

        <p className="mt-1 text-[11px] text-gray-400">
          {stack.length === 0
            ? "No technologies selected yet"
            : `${stack.length} ${
                stack.length === 1 ? "Technology" : "Technologies"
              } Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-gray-200 px-4 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5"
              >
                <img
                  src={technology.icon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-gray-800">
                    {technology.name}
                  </p>

                  <p className="text-[9px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="cursor-pointer text-sm text-gray-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full cursor-pointer rounded-md border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}