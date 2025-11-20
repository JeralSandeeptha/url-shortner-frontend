import { useNavigate, useParams } from 'react-router-dom';
import DashboardHeader from '../../components/dashboard-header/DashboardHeader';
import { useEffect, useRef, useState } from 'react';
import { getLink } from '../../api/link-services/get-link/getLink';
import type { Link } from '../../types/interface.types';
import { useAlert } from '../../hooks/useAlert';
import { dateFormatter } from '../../utils/date';
import { deleteLink } from '../../api/link-services/delete-link/deleteLink';
import { useLoading } from '../../hooks/useLoading';

const LinkPage = () => {
  const siteBaseURL = 'http://localhost:5173';
  const { linkId } = useParams();
  const [link, setLink] = useState<Link | undefined>(undefined);

  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();

  const mainShortURLCopy = useRef<HTMLAnchorElement | null>(null);
  const longURLCopy = useRef<HTMLAnchorElement | null>(null);

  const deleteLinkPermenant = () => {
    const isDeleted = window.confirm('Are you sure want to delete this URL?');
    if (!isDeleted) {
      return;
    }
    deleteLink({
      addAlert: addAlert,
      linkId: link?._id ?? '',
      setIsLoading: setIsLoading,
      navigate: navigate,
    });
  };

  const copyOriginalURL = async (inputRef: HTMLAnchorElement) => {
    if (!inputRef.href) return;
    const value = inputRef.href;

    try {
      await navigator.clipboard.writeText(value);
      addAlert('Copied to clipboard', 'success');
    } catch {
      addAlert('Failed copy to clipboard', 'error');
    }
  };

  const getLinkDetails = () => {
    if (!linkId) return;
    getLink({
      linkId: linkId,
      setLink: setLink,
    });
  };

  useEffect(() => {
    getLinkDetails();
  }, [linkId]);

  return (
    <>
      {/* Header */}
      <DashboardHeader title="Link Details" isSubHeader={true} subTitle="Link Details" />

      {/* link detials section */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Overview + Analytics */}
          <div className="lg:col-span-8 space-y-6">
            {/* Overview card */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.google.com/s2/favicons?domain=acme.com&amp;sz=64"
                        alt="favicon"
                        className="w-5 h-5 rounded"
                      />
                      <a
                        href={`${siteBaseURL}/${link?.short_url}`}
                        target="_blank"
                        className="truncate text-base sm:text-lg font-semibold tracking-tight text-neutral-100 hover:underline"
                      >
                        {link?.short_url}
                      </a>
                      <span
                        className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] ${link?.status === 'active' ? 'border-emerald-900/40 bg-emerald-900/20 text-emerald-300' : 'border-red-900/40 bg-red-900/20 text-red-300'}`}
                      >
                        {link?.status === 'active' ? 'Active' : 'Paused'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-neutral-400 truncate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        className="lucide lucide-link w-3.5 h-3.5"
                      >
                        <path d="M10 13a5 5 0 0 0 7.07 0l1.83-1.83a5 5 0 0 0-7.07-7.07L10 5"></path>
                        <path d="M14 11a5 5 0 0 0-7.07 0L5.1 12.83a5 5 0 0 0 7.07 7.07L14 19"></path>
                      </svg>
                      Destination:
                      <a
                        href={link?.long_url}
                        target="_blank"
                        className="truncate hover:text-neutral-200"
                        ref={longURLCopy}
                      >
                        {link?.long_url}
                      </a>
                      <button
                        className="cursor-pointer copy-link inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-[11px] text-neutral-300 hover:bg-neutral-800"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (!longURLCopy.current) return;
                          copyOriginalURL(longURLCopy.current);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-copy w-4 h-4"
                        >
                          <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      className="cursor-pointer copy-link inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!mainShortURLCopy.current) return;
                        copyOriginalURL(mainShortURLCopy.current);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-copy w-4 h-4"
                      >
                        <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                      Copy link
                    </button>
                    <a
                      href={`${siteBaseURL}/${link?.short_url}`}
                      target="_blank"
                      ref={mainShortURLCopy}
                      className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-3.5 py-2 text-sm font-medium hover:bg-neutral-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-external-link w-4 h-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Open
                    </a>
                  </div>
                </div>

                <div className="h-px bg-neutral-900"></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-3">
                    <div className="text-xs text-neutral-500">Total clicks</div>
                    <div className="mt-1 text-lg font-semibold tracking-tight">{link?.clicks}</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-3">
                    <div className="text-xs text-neutral-500">Last 24h</div>
                    <div className="mt-1 text-lg font-semibold tracking-tight">1,204</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-3">
                    <div className="text-xs text-neutral-500">Unique</div>
                    <div className="mt-1 text-lg font-semibold tracking-tight">9,876</div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-3">
                    <div className="text-xs text-neutral-500">Created</div>
                    <div className="mt-1 text-lg font-semibold tracking-tight">
                      {dateFormatter(link?.createdAt ?? '')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-base sm:text-lg font-semibold tracking-tight">Analytics</div>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar w-4 h-4 text-neutral-500"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <select
                      id="range-select"
                      className="cursor-pointer bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none"
                    >
                      <option className="bg-neutral-900" value="7">
                        Last 7 days
                      </option>
                      <option className="bg-neutral-900" value="30" selected>
                        Last 30 days
                      </option>
                      <option className="bg-neutral-900" value="90">
                        Last 90 days
                      </option>
                    </select>
                  </div>
                  <div className="flex sm:hidden gap-1 rounded-lg border border-neutral-800 p-1 bg-neutral-900">
                    <button
                      data-range="7"
                      className="range-btn px-2 py-1 rounded-md text-xs text-neutral-300"
                    >
                      7d
                    </button>
                    <button
                      data-range="30"
                      className="range-btn px-2 py-1 rounded-md text-xs bg-neutral-800 text-neutral-100"
                    >
                      30d
                    </button>
                    <button
                      data-range="90"
                      className="range-btn px-2 py-1 rounded-md text-xs text-neutral-300"
                    >
                      90d
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 rounded-xl border border-neutral-900 bg-neutral-950/60 p-3">
                  <div className="h-56 md:h-72 relative">
                    <canvas id="clicksChart"></canvas>
                  </div>
                </div>
                <div className="xl:col-span-1 rounded-xl border border-neutral-900 bg-neutral-950/60 p-3">
                  <div className="h-56 md:h-72 relative">
                    <canvas id="refChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: QR + Details  */}
          <div className="lg:col-span-4 space-y-6">
            {/* QR Code */}
            {/* <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-base sm:text-lg font-semibold tracking-tight">QR code</div>
                <span className="text-xs text-neutral-500">For lumen.link/launch</span>
              </div>
              <div className="mt-4 rounded-xl border border-neutral-900 bg-neutral-950/60 p-4 grid place-items-center">
                <div id="qr-container" className="bg-white p-2 rounded"></div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-scan-line w-4 h-4 text-neutral-500"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="3" y1="15" x2="21" y2="15" />
                  </svg>
                  <select
                    id="qr-size"
                    className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none"
                  >
                    <option className="bg-neutral-900" value="128">
                      128 px
                    </option>
                    <option className="bg-neutral-900" value="256" selected>
                      256 px
                    </option>
                    <option className="bg-neutral-900" value="512">
                      512 px
                    </option>
                  </select>
                </div>
                <button
                  id="qr-download"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-download w-4 h-4"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PNG
                </button>
              </div>
            </div> */}

            {/* Content Details Section */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="text-base sm:text-lg font-semibold tracking-tight">Details</div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <div className="text-xs text-neutral-500">Short link</div>
                    <div className="mt-1 text-sm text-neutral-200 truncate">{`${siteBaseURL}/${link?.short_url}`}</div>
                  </div>
                  <button
                    className="cursor-pointer copy-link inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[12px] text-neutral-300 hover:bg-neutral-800"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (!mainShortURLCopy.current) return;
                      copyOriginalURL(mainShortURLCopy.current);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-copy w-4 h-4"
                    >
                      <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    Copy
                  </button>
                </div>

                <div className="h-px bg-neutral-900"></div>

                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <div className="text-xs text-neutral-500">Destination</div>
                    <div className="mt-1 text-sm text-neutral-300 truncate">{link?.long_url}</div>
                  </div>
                  <button
                    className="cursor-pointer copy-link inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[12px] text-neutral-300 hover:bg-neutral-800"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (!longURLCopy.current) return;
                      copyOriginalURL(longURLCopy.current);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-copy w-4 h-4"
                    >
                      <rect x="8" y="8" width="14" height="14" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    Copy
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-500">Status</div>
                    <div className="mt-1 text-sm text-neutral-200">
                      {link?.status === 'active' ? 'Active' : 'Paused'}
                    </div>
                  </div>
                  <button
                    className="toggle inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-2 py-1.5"
                    role="switch"
                    aria-checked={link?.status === 'active'}
                    data-checked={link?.status === 'active'}
                  >
                    <span
                      className={`inline-flex h-5 w-9 items-center rounded-full transition-all
      ${link?.status === 'active' ? 'bg-emerald-600/90' : 'bg-neutral-700'}
    `}
                    >
                      <span
                        className={`inline-block h-4 w-4 rounded-full bg-white transition-all
        ${link?.status === 'active' ? 'ml-auto mr-0.5' : 'ml-0.5 mr-auto'}
      `}
                      ></span>
                    </span>

                    <span className="text-xs text-neutral-300">
                      {link?.status === 'active' ? 'Enabled' : 'Disabled'}
                    </span>
                  </button>
                </div>

                <div className="h-px bg-neutral-900"></div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-neutral-500">Tags</div>
                    <div className="mt-1 text-sm text-neutral-200 flex flex-wrap gap-1">
                      {link?.tags.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Campaign</div>
                    <div className="mt-1 text-sm text-neutral-200">
                      {link?.campaignId?.trim().length === 0 ? 'No Campaign' : link?.campaignId}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Created</div>
                    <div className="mt-1 text-sm text-neutral-200">
                      {dateFormatter(link?.createdAt ?? '')}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Last Updated</div>
                    <div className="mt-1 text-sm text-neutral-200">
                      {dateFormatter(link?.updatedAt ?? '')}
                    </div>
                  </div>
                  {/* <div>
                    <div className="text-xs text-neutral-500">Last activity</div>
                    <div className="mt-1 text-sm text-neutral-200">2h ago</div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Update zone */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Modify Zone</h3>

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
                  data-lucide="pencil"
                  className="lucide lucide-pencil w-4 h-4 text-blue-400"
                >
                  <path d="M17 3a2.828 2.828 0 0 1 4 4L7 21l-5 1 1-5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>

              <p className="mt-2 text-sm text-neutral-400">Save changes made to this link.</p>

              <p className="mt-2 text-sm text-neutral-400">
                You can't change short name of your link.
              </p>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                <div className="text-sm">
                  <div className="text-neutral-300">Update Link</div>
                  <div className="text-xs text-neutral-500">Your changes will be applied</div>
                </div>

                <button
                  id="update-link"
                  onClick={() => {}}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-blue-500/10 text-blue-400 px-3 py-1.5 text-sm border border-blue-500/30 hover:bg-blue-500/20"
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
                    data-lucide="save"
                    className="lucide lucide-save w-4 h-4"
                  >
                    <path d="M20 21V7.828a2 2 0 0 0-.586-1.414l-2.828-2.828A2 2 0 0 0 15.172 3H4a2 2 0 0 0-2 2v16" />
                    <path d="M12 17v4" />
                    <path d="M7 17v4" />
                    <rect x="7" y="3" width="10" height="6" rx="2" />
                  </svg>
                  Update
                </button>
              </div>
            </div>

            {/* Delete Link  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Danger Zone</h3>
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
                  data-lucide="alert-triangle"
                  className="lucide lucide-alert-triangle w-4 h-4 text-red-400"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Permanently delete this link and all associated data.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                <div className="text-sm">
                  <div className="text-neutral-300">Delete Link</div>
                  <div className="text-xs text-neutral-500">This action cannot be undone</div>
                </div>
                <button
                  id="delete-account"
                  onClick={deleteLinkPermenant}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-red-500/10 text-red-400 px-3 py-1.5 text-sm border border-red-500/30 hover:bg-red-500/20"
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
                    data-lucide="trash-2"
                    className="lucide lucide-trash-2 w-4 h-4"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>{' '}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinkPage;
