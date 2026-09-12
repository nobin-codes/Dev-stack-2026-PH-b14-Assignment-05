import heroImage from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section id="home" className="px-5">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="gradient-bg rounded-md px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="rounded-md border border-gray-200 bg-white px-7 py-3 text-center text-sm text-gray-700 transition hover:border-pink-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development technology stack illustration"
            className="w-[260px] max-w-full object-contain sm:w-[330px] lg:w-[390px]"
          />
        </div>
      </div>
    </section>
  );
}
