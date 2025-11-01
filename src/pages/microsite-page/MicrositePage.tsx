import DashboardHeader from '../../components/dashboard-header/DashboardHeader';

const MicrositePage = () => {
  return (
    <>
      {/* Header */}
      <DashboardHeader title="Microsite" />

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 text-neutral-200">
        <div className="space-y-6">
          {/* Microsite Toolbar */}
          <div className="sm:p-6 bg-neutral-950 border-neutral-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg font-semibold tracking-tight">
                  Build microsite
                </span>
                <span
                  id="ms-status-badge"
                  className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-300 px-2 py-0.5 text-[11px]"
                >
                  Draft
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="globe"
                    className="lucide lucide-globe w-4 h-4 text-neutral-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <select
                    id="ms-domain"
                    className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none"
                  >
                    <option className="bg-neutral-900">site.ln.li</option>
                    <option className="bg-neutral-900">pages.lumen.link</option>
                    <option className="bg-neutral-900">brand.link</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="hash"
                    className="lucide lucide-hash w-4 h-4 text-neutral-500"
                  >
                    <line x1="4" x2="20" y1="9" y2="9"></line>
                    <line x1="4" x2="20" y1="15" y2="15"></line>
                    <line x1="10" x2="8" y1="3" y2="21"></line>
                    <line x1="16" x2="14" y1="3" y2="21"></line>
                  </svg>
                  <input
                    id="ms-slug"
                    type="text"
                    placeholder="path (e.g. /me)"
                    className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-40"
                  />
                </div>
                <button
                  id="ms-save"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="save"
                    className="lucide lucide-save w-4 h-4"
                  >
                    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                  </svg>
                  Save draft
                </button>
                <button
                  id="ms-publish"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="rocket"
                    className="lucide lucide-rocket w-4 h-4"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  Publish
                </button>
              </div>
            </div>
            <div className="flex gap-3 bg-neutral-950 border-neutral-900 border rounded-lg mt-4 pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="link"
                  className="lucide lucide-link w-4 h-4 text-neutral-500"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <div className="truncate text-sm" id="ms-url">
                  https://site.ln.li/me
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs hover:bg-neutral-800 copy-link"
                  id="ms-copy"
                  data-clipboard="https://site.ln.li/me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="copy"
                    className="lucide lucide-copy w-3.5 h-3.5"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Copy
                </button>
                <a
                  target="_blank"
                  id="ms-open"
                  href="https://site.ln.li/me"
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="external-link"
                    className="lucide lucide-external-link w-3.5 h-3.5"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                  Open
                </a>
              </div>
            </div>
          </div>

          {/* Details + Preview */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
            <div className="sm:p-6 border-neutral-900 border-b pt-5 pr-5 pb-5 pl-5">
              <div className="text-base sm:text-lg font-semibold tracking-tight">
                Microsite details
              </div>
            </div>
            <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Controls */}
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm font-medium">Site info</div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="type"
                        className="lucide lucide-type w-4 h-4 text-neutral-500"
                      >
                        <path d="M12 4v16"></path>
                        <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
                        <path d="M9 20h6"></path>
                      </svg>
                      <input
                        id="ms-name"
                        type="text"
                        placeholder="Site name"
                        className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                      />
                    </div>
                    <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2 sm:col-span-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="message-square-text"
                        className="lucide lucide-message-square-text w-4 h-4 text-neutral-500"
                      >
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                        <path d="M7 11h10"></path>
                        <path d="M7 15h6"></path>
                        <path d="M7 7h8"></path>
                      </svg>
                      <input
                        id="ms-desc"
                        type="text"
                        placeholder="Tagline or description"
                        className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm font-medium">Appearance</div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="rounded-md border border-neutral-800 bg-neutral-900 px-2">
                      <label className="text-[11px] text-neutral-500">Theme</label>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="sun-moon"
                          className="lucide lucide-sun-moon w-4 h-4 text-neutral-500"
                        >
                          <path d="M12 2v2"></path>
                          <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"></path>
                          <path d="M16 12a4 4 0 0 0-4-4"></path>
                          <path d="m19 5-1.256 1.256"></path>
                          <path d="M20 12h2"></path>
                        </svg>
                        <select
                          id="ms-theme"
                          className="outline-none text-sm text-neutral-200 bg-transparent w-full pt-2.5 pr-6 pb-2.5 pl-2"
                        >
                          <option className="bg-neutral-900">Dark</option>
                          <option className="bg-neutral-900">Light</option>
                        </select>
                      </div>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-neutral-900 px-2">
                      <label className="text-[11px] text-neutral-500">Accent</label>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="palette"
                          className="lucide lucide-palette w-4 h-4 text-neutral-500"
                        >
                          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <select
                          id="ms-accent"
                          className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full"
                        >
                          <option className="bg-neutral-900">Emerald</option>
                          <option className="bg-neutral-900">Sky</option>
                          <option className="bg-neutral-900">Violet</option>
                          <option className="bg-neutral-900">Amber</option>
                          <option className="bg-neutral-900">Rose</option>
                        </select>
                      </div>
                    </div>
                    <div className="rounded-md border border-neutral-800 bg-neutral-900 px-2">
                      <label className="text-[11px] text-neutral-500">Font</label>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="case-sensitive"
                          className="lucide lucide-case-sensitive w-4 h-4 text-neutral-500"
                        >
                          <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"></path>
                          <path d="M22 9v7"></path>
                          <path d="M3.304 13h6.392"></path>
                          <circle cx="18.5" cy="12.5" r="3.5"></circle>
                        </svg>
                        <select
                          id="ms-font"
                          className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full"
                        >
                          <option className="bg-neutral-900">Inter</option>
                          <option className="bg-neutral-900">Geist</option>
                          <option className="bg-neutral-900">Plus Jakarta Sans</option>
                          <option className="bg-neutral-900">Manrope</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm font-medium">Sections</div>
                  <div className="mt-3 space-y-2">
                    <label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="sparkles"
                          className="lucide lucide-sparkles w-4 h-4 text-neutral-500"
                        >
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        Hero
                      </span>
                      <input id="sec-hero" type="checkbox" className="peer hidden" />
                      <span className="peer-checked:bg-emerald-500/20 peer-checked:text-emerald-300 inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                        Visible
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="info"
                          className="lucide lucide-info w-4 h-4 text-neutral-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                        About
                      </span>
                      <input id="sec-about" type="checkbox" className="peer hidden" />
                      <span className="peer-checked:bg-emerald-500/20 peer-checked:text-emerald-300 inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                        Visible
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="link"
                          className="lucide lucide-link w-4 h-4 text-neutral-500"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        Links
                      </span>
                      <input id="sec-links" type="checkbox" className="peer hidden" />
                      <span className="peer-checked:bg-emerald-500/20 peer-checked:text-emerald-300 inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                        Visible
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="images"
                          className="lucide lucide-images w-4 h-4 text-neutral-500"
                        >
                          <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path>
                          <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path>
                          <circle cx="13" cy="7" r="1" fill="currentColor"></circle>
                          <rect x="8" y="2" width="14" height="14" rx="2"></rect>
                        </svg>
                        Gallery
                      </span>
                      <input id="sec-gallery" type="checkbox" className="peer hidden" />
                      <span className="peer-checked:bg-emerald-500/20 peer-checked:text-emerald-300 inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                        Visible
                      </span>
                    </label>
                    <label className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="copyright"
                          className="lucide lucide-copyright w-4 h-4 text-neutral-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
                        </svg>
                        Footer
                      </span>
                      <input id="sec-footer" type="checkbox" className="peer hidden" />
                      <span className="peer-checked:bg-emerald-500/20 peer-checked:text-emerald-300 inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[11px] text-neutral-300">
                        Visible
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right: Preview */}
              <div className="lg:col-span-1">
                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Preview</div>
                    <div className="flex items-center gap-1">
                      <button
                        id="device-mobile"
                        className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs hover:bg-neutral-800 bg-neutral-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="smartphone"
                          className="lucide lucide-smartphone w-3.5 h-3.5"
                        >
                          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                          <path d="M12 18h.01"></path>
                        </svg>
                        Mobile
                      </button>
                      <button
                        id="device-desktop"
                        className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs hover:bg-neutral-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          data-lucide="monitor"
                          className="lucide lucide-monitor w-3.5 h-3.5"
                        >
                          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                          <line x1="8" x2="16" y1="21" y2="21"></line>
                          <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg>
                        Desktop
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 grid place-items-center">
                    <div id="ms-device" className="w-[360px] sm:w-[380px]">
                      <div
                        id="ms-preview"
                        className="rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 overflow-hidden"
                      >
                        {/* Hero */}
                        <section id="p-hero" className="px-5 py-8 border-b border-neutral-900">
                          <div
                            className="text-[11px] uppercase tracking-wider text-emerald-300"
                            id="ms-accent-text"
                          >
                            Featured
                          </div>
                          <h1
                            id="ms-site-title"
                            className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
                          >
                            LumenLink
                          </h1>
                          <p id="ms-site-desc" className="mt-2 text-sm text-neutral-400">
                            Share everything in one place.
                          </p>
                          <button
                            id="ms-cta"
                            className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-emerald-500 text-black px-3 py-1.5 text-sm hover:bg-emerald-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="mouse-pointer-click"
                              className="lucide lucide-mouse-pointer-click w-4 h-4"
                            >
                              <path d="M14 4.1 12 6"></path>
                              <path d="m5.1 8-2.9-.8"></path>
                              <path d="m6 12-1.9 2"></path>
                              <path d="M7.2 2.2 8 5.1"></path>
                              <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                            </svg>
                            Get started
                          </button>
                        </section>
                        {/* About */}
                        <section id="p-about" className="px-5 py-6 border-b border-neutral-900">
                          <div className="text-sm font-medium">About</div>
                          <p className="mt-2 text-sm text-neutral-400">
                            This microsite is your hub for links, socials, and projects.
                          </p>
                        </section>
                        Links
                        <section id="p-links" className="px-5 py-6 border-b border-neutral-900">
                          <div className="text-sm font-medium">Links</div>
                          <div className="mt-2 space-y-2">
                            <a
                              href="#"
                              className="block rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                            >
                              Latest article
                            </a>
                            <a
                              href="#"
                              className="block rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800"
                            >
                              Portfolio
                            </a>
                          </div>
                        </section>
                        {/* Gallery */}
                        <section id="p-gallery" className="px-5 py-6 border-b border-neutral-900">
                          <div className="text-sm font-medium">Gallery</div>
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="aspect-square rounded-md bg-neutral-800"></div>
                            <div className="aspect-square rounded-md bg-neutral-800"></div>
                            <div className="aspect-square rounded-md bg-neutral-800"></div>
                          </div>
                        </section>
                        {/* Footer  */}
                        <section id="p-footer" className="px-5 py-6">
                          <div className="text-xs text-neutral-500">
                            © <span id="ms-year">2025</span>
                            <span id="ms-name-inline">LumenLink</span>. All rights reserved.
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-3 border-t border-neutral-900 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Update content and publish when ready.
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="ms-save-footer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="save"
                    className="lucide lucide-save w-4 h-4"
                  >
                    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                  </svg>
                  Save draft
                </button>
                <button
                  id="ms-publish-footer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 text-black px-3 py-1.5 text-sm font-medium hover:bg-neutral-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="rocket"
                    className="lucide lucide-rocket w-4 h-4"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrositePage;
