import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-100 bg-white px-5 pt-14"
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="cursor-pointer">
              <img
                src={logoText}
                alt="Dev Stack Logo"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-xs text-gray-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Product
              </h3>

              <div className="mt-4 space-y-3 text-xs text-gray-500">
                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Home
                </button>

                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Technologies
                </button>

                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Projects
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Company
              </h3>

              <div className="mt-4 space-y-3 text-xs text-gray-500">
                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  About
                </button>

                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Contact
                </button>

                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Careers
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Legal
              </h3>

              <div className="mt-4 space-y-3 text-xs text-gray-500">
                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Privacy Policy
                </button>

                <button
                  type="button"
                  className="block cursor-pointer transition hover:text-pink-500"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 py-5 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <button
              type="button"
              className="cursor-pointer transition hover:text-gray-600"
            >
              Privacy
            </button>

            <button
              type="button"
              className="cursor-pointer transition hover:text-gray-600"
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}