const CampaignsPage = () => {
  return (
    <>
      {/* Header */}
      <div className="sticky z-30 sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4 bg-black/80 border-neutral-900">
        <div className="h-16 flex items-center justify-between">
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="menu"
                className="lucide lucide-menu w-5 h-5 text-neutral-300"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
            <div className="text-xl font-semibold tracking-tight">Campaigns</div>
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="search"
                className="lucide lucide-search w-4 h-4 text-neutral-500"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                type="text"
                placeholder="Search settings..."
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="bell"
                className="lucide lucide-bell w-5 h-5 text-neutral-300"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </button>

            <button className="rounded-full border border-neutral-800 p-0.5">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 text-neutral-200">
        <div className="space-y-6">
          {/* Toolbar */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg font-semibold tracking-tight">
                  All campaigns
                </span>
                <span className="text-xs text-neutral-500">12 total</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="lucide lucide-calendar w-4 h-4 text-neutral-500"
                  ></svg>
                  <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                    <option className="bg-neutral-900">Last 7 days</option>
                    <option selected className="bg-neutral-900">
                      Last 30 days
                    </option>
                    <option className="bg-neutral-900">Last 90 days</option>
                  </select>
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="lucide lucide-plus w-4 h-4"
                  ></svg>
                  New campaign
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="lucide lucide-search w-4 h-4 text-neutral-500"
                ></svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-full"
                />
              </div>
              <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="lucide lucide-filter w-4 h-4 text-neutral-500"
                ></svg>
                <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full">
                  <option className="bg-neutral-900" selected>
                    Status: All
                  </option>
                  <option className="bg-neutral-900">Active</option>
                  <option className="bg-neutral-900">Paused</option>
                  <option className="bg-neutral-900">Scheduled</option>
                  <option className="bg-neutral-900">Archived</option>
                </select>
              </div>
              <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="lucide lucide-arrow-up-down w-4 h-4 text-neutral-500"
                ></svg>
                <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full">
                  <option className="bg-neutral-900" selected>
                    Sort: Last activity
                  </option>
                  <option className="bg-neutral-900">Sort: Created</option>
                  <option className="bg-neutral-900">Sort: Clicks</option>
                  <option className="bg-neutral-900">Sort: CTR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Campaigns list */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
            <div className="divide-y divide-neutral-900">
              {/* Row */}
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-megaphone w-4.5 h-4.5 text-emerald-400"
                    ></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium truncate">Fall Launch 2025</div>
                      <span className="inline-flex items-center rounded-md border border-emerald-900/40 bg-emerald-900/20 text-emerald-300 px-2 py-0.5 text-[11px]">
                        Active
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 truncate">
                      Oct 1 — Oct 31 • Microsite + Social
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Clicks</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">48,219</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Conversions</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">4,122</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">CTR</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">8.4%</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Last activity</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">3m ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:ml-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-bar-chart-3 w-4 h-4"
                    ></svg>
                    View
                  </a>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-pencil w-4 h-4"
                    ></svg>
                    Edit
                  </button>
                  <button className="rounded-lg p-2 hover:bg-neutral-900 border border-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-more-horizontal w-4 h-4"
                    ></svg>
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-megaphone w-4.5 h-4.5 text-emerald-400"
                    ></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium truncate">Fall Launch 2025</div>
                      <span className="inline-flex items-center rounded-md border border-emerald-900/40 bg-emerald-900/20 text-emerald-300 px-2 py-0.5 text-[11px]">
                        Active
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 truncate">
                      Oct 1 — Oct 31 • Microsite + Social
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Clicks</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">48,219</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Conversions</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">4,122</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">CTR</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">8.4%</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Last activity</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">3m ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:ml-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-bar-chart-3 w-4 h-4"
                    ></svg>
                    View
                  </a>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-pencil w-4 h-4"
                    ></svg>
                    Edit
                  </button>
                  <button className="rounded-lg p-2 hover:bg-neutral-900 border border-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-more-horizontal w-4 h-4"
                    ></svg>
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-megaphone w-4.5 h-4.5 text-emerald-400"
                    ></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium truncate">Fall Launch 2025</div>
                      <span className="inline-flex items-center rounded-md border border-emerald-900/40 bg-emerald-900/20 text-emerald-300 px-2 py-0.5 text-[11px]">
                        Active
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 truncate">
                      Oct 1 — Oct 31 • Microsite + Social
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Clicks</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">48,219</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Conversions</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">4,122</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">CTR</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">8.4%</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Last activity</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">3m ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:ml-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-bar-chart-3 w-4 h-4"
                    ></svg>
                    View
                  </a>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-pencil w-4 h-4"
                    ></svg>
                    Edit
                  </button>
                  <button className="rounded-lg p-2 hover:bg-neutral-900 border border-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-more-horizontal w-4 h-4"
                    ></svg>
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-megaphone w-4.5 h-4.5 text-emerald-400"
                    ></svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium truncate">Fall Launch 2025</div>
                      <span className="inline-flex items-center rounded-md border border-emerald-900/40 bg-emerald-900/20 text-emerald-300 px-2 py-0.5 text-[11px]">
                        Active
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 truncate">
                      Oct 1 — Oct 31 • Microsite + Social
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Clicks</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">48,219</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Conversions</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">4,122</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">CTR</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">8.4%</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2">
                    <div className="text-[11px] text-neutral-500">Last activity</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">3m ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:ml-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-bar-chart-3 w-4 h-4"
                    ></svg>
                    View
                  </a>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-pencil w-4 h-4"
                    ></svg>
                    Edit
                  </button>
                  <button className="rounded-lg p-2 hover:bg-neutral-900 border border-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="lucide lucide-more-horizontal w-4 h-4"
                    ></svg>
                  </button>
                </div>
              </div>

              {/* Repeat same pattern for remaining 3 rows */}
              {/* ... (Retargeting Q4, Referral Boost, Holiday Promo) */}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-5 py-3 border-t border-neutral-900 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Showing 1–4 of 12</span>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="lucide lucide-chevron-left w-4 h-4"
                  ></svg>
                  Prev
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800">
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="lucide lucide-chevron-right w-4 h-4"
                  ></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignsPage;
