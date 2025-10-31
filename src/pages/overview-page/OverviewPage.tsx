const OverviewPage = () => {
  return (
    <>
      {/* Header */}
      <header className="sticky z-30 bg-black/80 border-neutral-900 border-b top-0 backdrop-blur-xl text-neutral-200">
        <div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                id="open-drawer"
                className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-neutral-900"
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
                  data-lucide="menu"
                  className="lucide lucide-menu w-5 h-5 text-neutral-300"
                >
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </button>
              <div className="text-xl font-semibold tracking-tight">URL Shortener</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
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
                  data-lucide="search"
                  className="lucide lucide-search w-4 h-4 text-neutral-500"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <input
                  type="text"
                  placeholder="Search links..."
                  className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200"
                />
              </div>
              <button className="rounded-lg p-2 hover:bg-neutral-900">
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
                  data-lucide="bell"
                  className="lucide lucide-bell w-5 h-5 text-neutral-300"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
              </button>
              <button className="rounded-full border border-neutral-800 p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 text-neutral-200"> 
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Center/Main column (spans 2) */}
          <div className="xl:col-span-2 space-y-6">
            {/* Performance  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Performance</h2>
                    <p className="text-sm text-neutral-400 mt-1">
                      Traffic and engagement over the last 12 months
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span>Date created
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>Top performing
                    </span>
                    <button
                      id="range-btn"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300"
                    >
                      Yearly
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="chevron-down"
                        className="lucide lucide-chevron-down w-3.5 h-3.5"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3">
                    <div className="text-xs text-neutral-400">Total Clicks</div>
                    <div className="mt-1 text-2xl font-semibold">2,280</div>
                  </div>
                  <div className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3">
                    <div className="text-xs text-neutral-400">Email, SMS, Direct</div>
                    <div className="mt-1 text-2xl font-semibold">1,756</div>
                  </div>
                </div>

                {/* Chart wrapper: keep canvas inside a container to prevent growth bug  */}
                <div className="mt-6 rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                  <div className="relative h-64">
                    <div className="absolute inset-0">
                      <canvas
                        id="perfChart"
                        width="873"
                        height="320"
                        className="display: block; box-sizing: border-box; height: 256px; width: 698px;"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight">Engagement All Time</h3>
                <div id="engagement-list" className="mt-4 space-y-4">
                  {/* Item 1  */}
                  <div className="rounded-xl border border-neutral-900 bg-neutral-950">
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="">
                          <a
                            href="#"
                            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                          >
                            short.link/InvoiceLandingPage
                          </a>
                          <p className="text-xs text-neutral-400 mt-1 truncate">
                            https://dribbble.com/shots/19953119-Invozo-Invoice-Landing-Page
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-[11px] text-neutral-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="clock"
                              className="lucide lucide-clock w-3.5 h-3.5"
                            >
                              <path d="M12 6v6l4 2"></path>
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span>12 Dec 2024 12:06</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="copy"
                              className="lucide lucide-copy w-3.5 h-3.5"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>{' '}
                            Copy
                          </button>
                          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="pen-line"
                              className="lucide lucide-pen-line w-3.5 h-3.5"
                            >
                              <path d="M13 21h8"></path>
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            </svg>{' '}
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item 2  */}
                  <div className="rounded-xl border border-neutral-900 bg-neutral-950">
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <a
                            href="#"
                            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                          >
                            short.link/FinanceHero
                          </a>
                          <p className="text-xs text-neutral-400 mt-1 truncate">
                            https://dribbble.com/shots/19719600-Justadmin-Finance-SaaS-Hero
                          </p>
                          <div className="mt-2 flex items-center gap-2 text-[11px] text-neutral-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="clock"
                              className="lucide lucide-clock w-3.5 h-3.5"
                            >
                              <path d="M12 6v6l4 2"></path>
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span>02 Dec 2024 09:20</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="copy"
                              className="lucide lucide-copy w-3.5 h-3.5"
                            >
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>{' '}
                            Copy
                          </button>
                          <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-lucide="pen-line"
                              className="lucide lucide-pen-line w-3.5 h-3.5"
                            >
                              <path d="M13 21h8"></path>
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            </svg>{' '}
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="empty-state"
                  className="hidden mt-6 rounded-xl border border-neutral-900 bg-neutral-950 p-6 text-center"
                >
                  <div className="mx-auto w-10 h-10 rounded-full bg-neutral-900 grid place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="link"
                      className="lucide lucide-link w-5 h-5 text-neutral-400"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-neutral-400">
                    No links yet. Create your first short link on the right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column  */}
          <div className="space-y-6">
            {/* Create New Link  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Create New Link</h3>
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
                  data-lucide="paperclip"
                  className="lucide lucide-paperclip w-4 h-4 text-neutral-500"
                >
                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                </svg>
              </div>
              <form id="create-form" className="mt-4 space-3">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 flex items-center gap-2 px-3 py-2.5">
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
                    data-lucide="globe-2"
                    className="lucide lucide-globe-2 w-4 h-4 text-neutral-500"
                  >
                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                    <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <input
                    id="long-url"
                    type="url"
                    placeholder="https://example.com/your-page"
                    className="w-full bg-transparent text-sm outline-none placeholder-neutral-500 text-neutral-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-100 text-black px-4 py-2.5 text-sm font-medium hover:bg-neutral-200 transition-colors"
                >
                  Create Link
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
                    data-lucide="arrow-right"
                    className="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Custom your link  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight">Custom Your Link</h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"
                  alt="preview"
                  className="w-full h-36 object-cover"
                />
              </div>
              <div className="mt-4">
                <label className="text-xs text-neutral-400">Slug</label>
                <div className="mt-1 flex">
                  <span className="inline-flex items-center rounded-l-lg border border-neutral-800 bg-neutral-900 px-3 text-xs text-neutral-400">
                    short.link/
                  </span>
                  <input
                    id="slug-input"
                    type="text"
                    placeholder="your-slug"
                    className="w-full rounded-r-lg border border-l-0 border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm outline-none placeholder-neutral-500 text-neutral-200"
                  />
                </div>
                <button
                  id="save-slug"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-800"
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
                    data-lucide="save"
                    className="lucide lucide-save w-4 h-4"
                  >
                    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                  </svg>{' '}
                  Save
                </button>
              </div>
            </div>

            {/* QR Code  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">QR Code</h3>
                <a
                  id="download-qr"
                  href="#"
                  download="lumenlink-qr.png"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3 py-1.5 text-xs hover:bg-neutral-200"
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
                  </svg>{' '}
                  Download PNG
                </a>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <img
                  id="qr-image"
                  alt="QR Code"
                  className="w-28 h-28 rounded-lg border border-neutral-800 bg-white p-1"
                  src="https://quickchart.io/qr?text=https%3A%2F%2Flumen.link%2Fwelcome&amp;size=280&amp;margin=2"
                />
                <div className="text-sm">
                  <div className="text-neutral-300">Current short link</div>
                  <a
                    id="current-short"
                    href="https://lumen.link/welcome"
                    target="_blank"
                    rel="noopener"
                    className="mt-1 block text-indigo-400 hover:text-indigo-300 break-all"
                  >
                    https://lumen.link/welcome
                  </a>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
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
                      data-lucide="calendar"
                      className="lucide lucide-calendar w-3.5 h-3.5"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span id="qr-date">November 1, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewPage;
