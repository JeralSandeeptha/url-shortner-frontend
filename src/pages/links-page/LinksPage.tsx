import { useEffect, useState } from 'react';
import DashboardHeader from '../../components/dashboard-header/DashboardHeader';
import type { Link as LinkProps } from '../../types/interface.types';
import LinkRow from '../../components/link-row/LinkRow';
import { getUserLinks } from '../../api/link-services/get-user-links/getUserLinks';
import { useUser } from '../../hooks/useUser';
import { Link } from 'react-router-dom';

const LinksPage = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);

  const { user } = useUser();

  const getLinks = () => {
    console.log('Fetching user links...');
    getUserLinks({
      userId: user,
      setLinks: setLinks,
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      {/* Header */}
      <DashboardHeader title="Links" />

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-3">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex flex-col gap-4">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                  <div className="flex items-center gap-2">
                    <Link
                      id="new-link"
                      to="/dashboard/links/create-link"
                      className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200"
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
                    </Link>
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
                      onClick={getLinks}
                      className="cursor-pointer inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 hover:bg-neutral-800"
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

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-neutral-300 overflow-scroll">
                    <thead>
                      <tr className="text-left text-neutral-500 border-b border-neutral-900 flex items-center justify-between">
                        <div className="grid grid-cols-5 w-full items-center">
                          <th className="py-3 font-medium">Link</th>
                          <th className="py-3 font-medium">Destination</th>
                          <th className="py-3 font-medium text-center">Clicks</th>
                          <th className="py-3 font-medium">Tags</th>
                          <th className="py-3 font-medium">Date</th>
                        </div>
                        <div>
                          <th className="py-3 px-2 font-medium text-right">Actions</th>
                        </div>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-neutral-900 w-full">
                      {/* Row Example */}
                      {links.map((item) => (
                        <LinkRow key={item._id} {...item} />
                      ))}
                    </tbody>
                  </table>
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
