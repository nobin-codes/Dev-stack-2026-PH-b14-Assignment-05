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
            <a href="#home">
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
              <a href="https://github.com" target="_blank">
                GitHub
              </a>

              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>

              <a href="https://linkedin.com" target="_blank">
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
                <span className="block">Home</span>
                <span className="block">Technologies</span>
                <span className="block">Projects</span>
              </div>
            </div>

            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Company
              </h3>

              <div className="mt-4 space-y-3 text-xs text-gray-500">
                <span className="block">About</span>
                <span className="block">Contact</span>
                <span className="block">Careers</span>
              </div>
            </div>

            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
                Legal
              </h3>

              <div className="mt-4 space-y-3 text-xs text-gray-500">
                <span className="block">Privacy Policy</span>
                <span className="block">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-3 border-t border-gray-100 py-5 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}