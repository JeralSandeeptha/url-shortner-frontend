const CtaSection = () => {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-black border-neutral-900 border-t pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="sm:p-12 overflow-hidden border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative bg-neutral-950 border-neutral-800">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_60%)] blur-3xl"></div>
          <div className="max-w-2xl relative">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 text-white">
              Turn long URLs into smart links
            </h3>
            <p className="mb-6 text-neutral-400">
              Ship branded links with privacy-first analytics and resilient redirects in minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#hero-shorten"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="wand-2"
                  className="lucide lucide-wand-2 w-4 h-4"
                >
                  <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                  <path d="m14 7 3 3"></path>
                  <path d="M5 6v4"></path>
                  <path d="M19 14v4"></path>
                  <path d="M10 2v2"></path>
                  <path d="M7 8H3"></path>
                  <path d="M21 16h-4"></path>
                  <path d="M11 3H9"></path>
                </svg>
                <span>Create a link</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium border transition-colors text-neutral-200 border-neutral-800 bg-neutral-950 hover:bg-neutral-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="play-circle"
                  className="lucide lucide-play-circle w-4 h-4"
                >
                  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>Watch demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
