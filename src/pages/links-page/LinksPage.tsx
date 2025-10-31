const LinksPage = () => {
  return (
    <>
      {/* Header */}
      <div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4 bg-black/80 border-neutral-900">
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
            <div className="text-xl font-semibold tracking-tight">Links</div>
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
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-3">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex flex-col gap-4">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      id="new-link"
                      className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200"
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
                        data-lucide="plus"
                        className="lucide lucide-plus w-4 h-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      New link
                    </button>

                    <button
                      id="bulk-actions"
                      className="hidden inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800"
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
                        data-lucide="filter"
                        className="lucide lucide-filter w-4 h-4"
                      >
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      Bulk actions (<span id="bulk-count">0</span>)
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="flex items-center gap-2">
                    {/* Domain Filter */}
                    <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                        data-lucide="link"
                        className="lucide lucide-link w-4 h-4 text-neutral-500"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                        <option className="bg-neutral-900">lumen.link</option>
                        <option className="bg-neutral-900">short.link</option>
                        <option className="bg-neutral-900">go.acme.com</option>
                      </select>
                    </div>

                    {/* Tag Filter */}
                    <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                        data-lucide="tag"
                        className="lucide lucide-tag w-4 h-4 text-neutral-500"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                      </svg>
                      <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                        <option className="bg-neutral-900">All tags</option>
                        <option className="bg-neutral-900">marketing</option>
                        <option className="bg-neutral-900">product</option>
                        <option className="bg-neutral-900">social</option>
                      </select>
                    </div>

                    {/* Sort Filter */}
                    <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                        data-lucide="calendar"
                        className="lucide lucide-calendar w-4 h-4 text-neutral-500"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                        <option className="bg-neutral-900">Newest</option>
                        <option className="bg-neutral-900">Oldest</option>
                        <option className="bg-neutral-900">Most clicks</option>
                        <option className="bg-neutral-900">Least clicks</option>
                      </select>
                    </div>

                    <button
                      id="refresh"
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 hover:bg-neutral-800"
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
                        data-lucide="refresh-ccw"
                        className="lucide lucide-refresh-ccw w-4 h-4 text-neutral-300"
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                        <path d="M16 16h5v5"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="h-px bg-neutral-900"></div>

                {/* Table + Rows would go here — omitted for brevity */}
                <div className="text-neutral-200">
                  <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                      <div className="xl:col-span-3">
                        <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
                          <div className="flex flex-col gap-4">
                            {/* Header Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  id="new-link"
                                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200"
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
                                    data-lucide="plus"
                                    className="lucide lucide-plus w-4 h-4"
                                  >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                  New link
                                </button>
                              </div>

                              {/* Filters */}
                              <div className="flex items-center gap-2">
                                <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                                    className="lucide lucide-link w-4 h-4 text-neutral-500"
                                  >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                  <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                                    <option className="bg-neutral-900">lumen.link</option>
                                    <option className="bg-neutral-900">short.link</option>
                                    <option className="bg-neutral-900">go.acme.com</option>
                                  </select>
                                </div>

                                <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                                    className="lucide lucide-tag w-4 h-4 text-neutral-500"
                                  >
                                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                  </svg>
                                  <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                                    <option className="bg-neutral-900">All tags</option>
                                    <option className="bg-neutral-900">marketing</option>
                                    <option className="bg-neutral-900">product</option>
                                    <option className="bg-neutral-900">social</option>
                                  </select>
                                </div>

                                <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
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
                                    className="lucide lucide-calendar w-4 h-4 text-neutral-500"
                                  >
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  <select className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none">
                                    <option className="bg-neutral-900">Newest</option>
                                    <option className="bg-neutral-900">Oldest</option>
                                    <option className="bg-neutral-900">Most clicks</option>
                                    <option className="bg-neutral-900">Least clicks</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="h-px bg-neutral-900"></div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm text-neutral-300">
                                <thead>
                                  <tr className="text-left text-neutral-500 border-b border-neutral-900">
                                    <th className="py-3 px-2 font-medium">Link</th>
                                    <th className="py-3 px-2 font-medium">Destination</th>
                                    <th className="py-3 px-2 font-medium">Clicks</th>
                                    <th className="py-3 px-2 font-medium">Tags</th>
                                    <th className="py-3 px-2 font-medium">Date</th>
                                    <th className="py-3 px-2 font-medium text-right">Actions</th>
                                  </tr>
                                </thead>

                                <tbody className="divide-y divide-neutral-900">
                                  {/* Row Example */}
                                  {[
                                    {
                                      id: 1,
                                      link: 'lumen.link/launch',
                                      dest: 'acme.com/product-launch',
                                      clicks: '1,245',
                                      tags: ['marketing'],
                                      date: 'Oct 22, 2025',
                                    },
                                    {
                                      id: 2,
                                      link: 'short.link/blackfriday',
                                      dest: 'acme.com/blackfriday',
                                      clicks: '4,892',
                                      tags: ['social', 'product'],
                                      date: 'Oct 20, 2025',
                                    },
                                    {
                                      id: 3,
                                      link: 'go.acme.com/demo',
                                      dest: 'demo.acme.com/signup',
                                      clicks: '932',
                                      tags: ['product'],
                                      date: 'Oct 18, 2025',
                                    },
                                    {
                                      id: 4,
                                      link: 'lumen.link/blog',
                                      dest: 'acme.com/blog',
                                      clicks: '5,203',
                                      tags: ['marketing'],
                                      date: 'Oct 10, 2025',
                                    },
                                    {
                                      id: 5,
                                      link: 'short.link/careers',
                                      dest: 'acme.com/careers',
                                      clicks: '723',
                                      tags: ['social'],
                                      date: 'Oct 5, 2025',
                                    },
                                  ].map((item) => (
                                    <tr key={item.id} className="hover:bg-neutral-900/50">
                                      <td className="py-3 px-2 font-medium text-neutral-200">
                                        {item.link}
                                      </td>
                                      <td className="py-3 px-2 text-neutral-400 truncate max-w-[180px]">
                                        {item.dest}
                                      </td>
                                      <td className="py-3 px-2">{item.clicks}</td>
                                      <td className="py-3 px-2">
                                        <div className="flex gap-1 flex-wrap">
                                          {item.tags.map((tag) => (
                                            <span
                                              key={tag}
                                              className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      </td>
                                      <td className="py-3 px-2 text-neutral-400">{item.date}</td>
                                      <td className="py-3 px-2 text-right">
                                        <button className="p-1 rounded hover:bg-neutral-800">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-more-horizontal w-4 h-4 text-neutral-400"
                                          >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinksPage;
