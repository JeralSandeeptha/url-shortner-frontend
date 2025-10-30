const Hero = () => {
  return (
    <section
      className="relative bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf784108-20b3-4841-98e8-586a808b754f_3840w.jpg')]
             bg-cover bg-center bg-no-repeat
             before:absolute before:inset-0
             before:bg-gradient-to-b before:from-neutral-950/0 before:to-black
             pt-32 pb-20 overflow-hidden"
      id="hero"
    >
      <div className="z-20 relative sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-6 text-neutral-400 bg-neutral-900">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span>Now live: Teams, Smart Routing and QR Codes</span>
          </div>
          <h1 className="sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-semibold tracking-tight mb-6 text-neutral-100">
            Shorten, track, and manage links at scale
          </h1>
          <p className="sm:text-lg md:text-xl leading-relaxed text-base max-w-2xl mr-auto mb-10 ml-auto text-neutral-400">
            Blazing‑fast redirects, privacy‑first analytics, custom domains, and powerful APIs.
            Everything your team needs to turn long URLs into smart links.
          </p>

          {/* Hero Form  */}
          <div id="hero-shorten" className="max-w-3xl mx-auto">
            <form id="shorten-form" className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 flex items-center gap-2 rounded-lg border px-3 py-2.5 focus-within:border-neutral-700 border-neutral-800 bg-neutral-950">
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
                  data-lucide="link-2"
                  className="lucide lucide-link-2 w-4 h-4 flex-shrink-0 text-neutral-400"
                >
                  <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                  <line x1="8" x2="16" y1="12" y2="12"></line>
                </svg>
                <input
                  id="url-input"
                  type="url"
                  placeholder="Paste a long URL (https://...)"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 text-neutral-100"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
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
                <span>Shorten URL</span>
              </button>
            </form>

            {/* Result  */}
            <div
              id="shorten-result"
              className="hidden mt-4 rounded-lg border p-3 sm:p-4 border-neutral-800 bg-neutral-950"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-neutral-500 mb- 1">Short link</div>
                  <a
                    id="short-url"
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="block truncate font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    https://lumen.link/xxxxx
                  </a>
                  <div className="text-xs text-neutral-500 mt-1 truncate">
                    Original:
                    <span id="original-url" className="text-neutral-300"></span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    id="copy-btn"
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium transition-colors border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
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
                      data-lucide="copy"
                      className="lucide lucide-copy w-3.5 h-3.5"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                    <span>Copy</span>
                  </button>
                  <button
                    id="qr-btn"
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium transition-colors border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
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
                      data-lucide="qr-code"
                      className="lucide lucide-qr-code w-3.5 h-3.5"
                    >
                      <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                      <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                      <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                      <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 21v.01"></path>
                      <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                      <path d="M3 12h.01"></path>
                      <path d="M12 3h.01"></path>
                      <path d="M12 16v.01"></path>
                      <path d="M16 12h1"></path>
                      <path d="M21 12v.01"></path>
                      <path d="M12 21v-1"></path>
                    </svg>
                    <span>QR</span>
                  </button>
                </div>
              </div>
              <div
                id="qr-panel"
                className="hidden mt-3 border rounded-md p-3 border-neutral-800 bg-neutral-950/60"
              >
                <div className="flex items-center gap-3">
                  <img
                    id="qr-image"
                    alt="QR code for short link"
                    className="w-24 h-24 rounded-md border p-1 border-neutral-800 bg-white"
                  />
                  <div className="text-xs text-neutral-400">
                    <div className="font-medium mb-1 text-neutral-300">Scan to open</div>
                    <p>
                      Download or share this QR code anywhere. Perfect for print, packaging, and
                      events.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <a
                        id="qr-download"
                        download="lumenlink-qr.png"
                        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px] font-medium transition-colors border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
                        href="#"
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
                          data-lucide="download"
                          className="lucide lucide-download w-3.5 h-3.5"
                        >
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                        <span>Download</span>
                      </a>
                      <button
                        id="qr-close"
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[11px] font-medium transition-colors border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
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
                          data-lucide="x"
                          className="lucide lucide-x w-3.5 h-3.5"
                        >
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        <span>Close</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="result-status" role="status" aria-live="polite" className="sr-only"></div>
            </div>
          </div>

          {/* Trust Bar  */}
          <div className="mt-10 text-neutral-500 text-xs">Trusted by startups and teams at</div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-80">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg"
              alt="Vercel"
              className="h-5 invert opacity-70"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg"
              alt="Notion"
              className="h-5 invert opacity-70"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg"
              alt="Stripe"
              className="h-5 invert opacity-70"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg"
              alt="Figma"
              className="h-5 invert opacity-70"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
              className="h-5 invert opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
