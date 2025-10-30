const Features = () => {
  return (
    <section className="bg-black border-neutral-900 border-t pt-20 pb-20" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Everything you need to ship smarter links
            </h2>
            <p className="mb-8 text-neutral-400">
              From one-off short links to enterprise rollouts, LumenLink gives you speed, privacy,
              and control in a simple UI with powerful APIs.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="flex gap-3 p-4 rounded-lg border border-neutral-800 bg-neutral-950">
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
                  data-lucide="shield-check"
                  className="lucide lucide-shield-check w-5 h-5 mt-0.5 text-emerald-400"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <div className="font-medium">Privacy-first analytics</div>
                  <p className="text-sm text-neutral-400">
                    No cookies. GDPR-friendly insights with geos, devices, referrers.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 p-4 rounded-lg border border-neutral-800 bg-neutral-950">
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
                  data-lucide="globe"
                  className="lucide lucide-globe w-5 h-5 mt-0.5 text-indigo-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <div>
                  <div className="font-medium">Custom domains</div>
                  <p className="text-sm text-neutral-400">
                    Bring your brand: link.yourdomain.com with HTTPS and DNS checks.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 p-4 rounded-lg border border-neutral-800 bg-neutral-950">
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
                  data-lucide="git-branch"
                  className="lucide lucide-git-branch w-5 h-5 mt-0.5 text-pink-400"
                >
                  <line x1="6" x2="6" y1="3" y2="15"></line>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                <div>
                  <div className="font-medium">Smart routing</div>
                  <p className="text-sm text-neutral-400">
                    Route by device, country, or campaign with rules and fallbacks.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 p-4 rounded-lg border border-neutral-800 bg-neutral-950">
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
                  data-lucide="code-2"
                  className="lucide lucide-code-2 w-5 h-5 mt-0.5 text-amber-400"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
                <div>
                  <div className="font-medium">Developer‑friendly</div>
                  <p className="text-sm text-neutral-400">
                    REST and webhook APIs, SDKs, and rate-limited tokens for teams.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#pricing"
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
                  data-lucide="shopping-bag"
                  className="lucide lucide-shopping-bag w-4 h-4"
                >
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
                <span>View pricing</span>
              </a>
              <a
                href="#resources"
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
                  data-lucide="book-open"
                  className="lucide lucide-book-open w-4 h-4"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                <span>Docs &amp; guides</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-indigo-500/10 to-transparent blur-2xl"></div>
            <div className="rounded-xl border p-4 sm:p-6 shadow-2xl border-neutral-800 bg-neutral-950">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <div className="text-sm text-neutral-400">Realtime analytics</div>
                </div>
                <div className="text-xs text-neutral-500">last 24h</div>
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-lg border p-4 border-neutral-800 bg-neutral-900/40">
                  <div className="text-xs text-neutral-400">Total clicks</div>
                  <div className="text-2xl font-semibold mt-1">12,483</div>
                  <div className="mt-2 h-1.5 rounded-full bg-neutral-800">
                    <div className="h-1.5 rounded-full bg-emerald-500 w-[68%]"></div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 border-neutral-800 bg-neutral-900/40">
                  <div className="text-xs text-neutral-400">Unique visitors</div>
                  <div className="text-2xl font-semibold mt-1">8,921</div>
                  <div className="mt-2 h-1.5 rounded-full bg-neutral-800">
                    <div className="h-1.5 rounded-full bg-indigo-500 w-[54%]"></div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 border-neutral-800 bg-neutral-900/40">
                  <div className="text-xs text-neutral-400">Top source</div>
                  <div className="text-2xl font-semibold mt-1">Twitter</div>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] bg-neutral-800">
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
                        data-lucide="mouse-pointer-click"
                        className="lucide lucide-mouse-pointer-click w-3.5 h-3.5"
                      >
                        <path d="M14 4.1 12 6"></path>
                        <path d="m5.1 8-2.9-.8"></path>
                        <path d="m6 12-1.9 2"></path>
                        <path d="M7.2 2.2 8 5.1"></path>
                        <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                      </svg>{' '}
                      38%
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] bg-neutral-800">
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
                        data-lucide="map-pin"
                        className="lucide lucide-map-pin w-3.5 h-3.5"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>{' '}
                      US
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border p-4 border-neutral-800 bg-neutral-900/40">
                <div className="text-xs mb-2 text-neutral-400">Clicks over time</div>
                <div className="relative h-28">
                  <div className="absolute inset-0 flex items-end gap-1">
                    <div className="w-full h-[30%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[45%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[25%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[70%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[50%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[80%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[35%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[65%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[40%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[75%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[55%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                    <div className="w-full h-[85%] bg-gradient-to-t from-emerald-500/20 to-transparent rounded-t"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-md border px-2 py-1 border-neutral-800 bg-neutral-900 text-neutral-300">
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
                    data-lucide="sparkles"
                    className="lucide lucide-sparkles w-3.5 h-3.5 text-emerald-400"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  Smart routing active
                </span>
                <span className="inline-flex items-center gap-1 text-neutral-300 bg-neutral-900 border-neutral-800 border rounded-md pt-1 pr-2 pb-1 pl-2">
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
                    data-lucide="check-circle-2"
                    className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-indigo-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  99.99% uptime
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border px-2 py-1 border-neutral-800 bg-neutral-900 text-neutral-300">
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
                    data-lucide="lock"
                    className="lucide lucide-lock w-3.5 h-3.5 text-amber-400"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  SSL everywhere
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
