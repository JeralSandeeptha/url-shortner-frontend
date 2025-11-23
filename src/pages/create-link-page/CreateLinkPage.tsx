import { useRef, useState } from 'react';
import DashboardHeader from '../../components/dashboard-header/DashboardHeader';
import { linkStatus } from '../../constants/link-status';
import { useUser } from '../../hooks/useUser';
import { createLink } from '../../api/link-services/create-link/createLink';
import { useAlert } from '../../hooks/useAlert';
import type { CreateLinkFields } from '../../types/interface.types';
import { useLoading } from '../../hooks/useLoading';
import { useNavigate } from 'react-router-dom';

const CreateLinkPage = () => {
  const siteBaseURL = 'http://localhost:5173';

  const { user } = useUser();
  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();

  const [linkData, setLinkData] = useState<CreateLinkFields>();
  const [tagInput, setTagInput] = useState<string>('');

  const mainShortURLCopy = useRef<HTMLInputElement | null>(null);

  const copyOriginalURL = async (inputRef: HTMLInputElement) => {
    if (!inputRef.value) return;
    const value = inputRef.value;

    try {
      await navigator.clipboard.writeText(value);
      addAlert('Copied to clipboard', 'success');
    } catch {
      addAlert('Failed copy to clipboard', 'error');
    }
  };

  const resetFormData = () => {
    setLinkData({
      long_url: '',
      short_url: '',
      status: 'active',
      campaignId: '',
      tags: [],
      userId: '',
    });
    setTagInput('');
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      setLinkData((prev) => {
        const currentTags = prev?.tags ?? [];
        // Avoid duplicate tags
        if (currentTags.includes(newTag)) {
          return prev;
        }
        return prev
          ? { ...prev, tags: [...currentTags, newTag] }
          : ({ tags: [newTag] } as CreateLinkFields);
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setLinkData((prev) => {
      if (!prev) return prev;
      const updatedTags = prev.tags?.filter((tag) => tag !== tagToRemove) ?? [];
      return { ...prev, tags: updatedTags };
    });
  };

  const createNewLink = () => {
    const correctedLinkData: CreateLinkFields = {
      long_url: linkData?.long_url ?? '',
      short_url: linkData?.short_url ?? '',
      userId: user,
      status: linkData?.status ?? 'active',
      tags: linkData?.tags ?? [],
      campaignId: linkData?.campaignId,
    };
    if (
      correctedLinkData.long_url.trim().length === 0 ||
      correctedLinkData.short_url.trim().length === 0 ||
      correctedLinkData.userId === ''
    ) {
      addAlert('Please fill all the required fields', 'warning');
    } else {
      createLink({
        addAlert: addAlert,
        linkData: correctedLinkData,
        setIsLoading: setIsLoading,
        setLinkData: setLinkData,
        navigate: navigate,
      });
    }
  };

  return (
    <>
      {/* Header */}
      <DashboardHeader title="Custom Link" />

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 text-neutral-200">
        <div className="space-y-6">
          <h1>Builder Toolbar</h1>
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg font-semibold tracking-tight">
                  Create custom link
                </span>
                <span
                  id="status-badge"
                  className={`${linkData?.status === 'active' ? 'border-emerald-900/40 bg-emerald-900/20 text-emerald-300' : 'border-red-900/40 bg-red-900/20 text-red-300'} inline-flex items-center rounded-md border px-2 py-0.5 text-[11px]`}
                >
                  {linkData?.status === 'active' ? 'Active' : 'Paused'}
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 sm:col-span-2">
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
                <input
                  id="destination"
                  ref={mainShortURLCopy}
                  type="url"
                  placeholder="Destination URL (https://example.com/page)"
                  className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-full"
                  value={linkData?.long_url ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) return;

                    setLinkData((prev) =>
                      prev
                        ? { ...prev, long_url: value }
                        : ({ long_url: value } as CreateLinkFields)
                    );
                  }}
                />
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
                  id="slug"
                  type="text"
                  placeholder="Custom slug (e.g. fall-launch)"
                  className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-full"
                  value={linkData?.short_url ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) return;

                    setLinkData((prev) =>
                      prev
                        ? { ...prev, short_url: value }
                        : ({ short_url: value } as CreateLinkFields)
                    );
                  }}
                />
              </div>
            </div>
          </div>
          {/* Details + Preview */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
            <div className="p-5 sm:p-6 border-b border-neutral-900">
              <div className="text-base sm:text-lg font-semibold tracking-tight">Link details</div>
            </div>
            <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Form */}
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                    <label className="text-[11px] text-neutral-500">Status</label>
                    <div className="mt-1 flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2">
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
                        data-lucide="activity"
                        className="lucide lucide-activity w-4 h-4 text-neutral-500"
                      >
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                      <select
                        id="status"
                        className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full"
                        value={linkData?.status}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!value) return;

                          setLinkData((prev) =>
                            prev
                              ? { ...prev, status: value as 'active' | 'inactive' }
                              : ({ status: value as 'active' | 'inactive' } as CreateLinkFields)
                          );
                        }}
                      >
                        {linkStatus.map((linkStatus) => {
                          return (
                            <option
                              className="bg-neutral-900"
                              value={linkStatus.value}
                              key={linkStatus.value}
                            >
                              {linkStatus.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                    <label className="text-[11px] text-neutral-500">Expiration (optional)</label>
                    <div className="mt-1 flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2">
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
                        data-lucide="calendar"
                        className="lucide lucide-calendar w-4 h-4 text-neutral-500"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <input
                        id="expires"
                        type="datetime-local"
                        className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <label className="text-[11px] text-neutral-500">Password (optional)</label>
                  <div className="mt-1 flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2">
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
                      data-lucide="lock"
                      className="lucide lucide-lock w-4 h-4 text-neutral-500"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      id="password"
                      type="text"
                      placeholder="Set a password to protect the link"
                      className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <label className="text-[11px] text-neutral-500">Tags (optional)</label>
                  <div className="mt-1 flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-2">
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
                      data-lucide="tag"
                      className="lucide lucide-tag w-4 h-4 text-neutral-500"
                    >
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    <input
                      id="tags"
                      type="text"
                      placeholder="Type a tag and press Enter"
                      className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                    />
                  </div>
                  {linkData?.tags && linkData.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {linkData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-200"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:text-neutral-400 transition-colors"
                            aria-label={`Remove tag ${tag}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              data-lucide="x"
                              className="lucide lucide-x"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="M6 6l12 12"></path>
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* <div className="rounded-lg border border-neutral-900 bg-neutral-950">
                  <button
                    id="utm-toggle"
                    className="w-full flex items-center justify-between px-3 py-3"
                  >
                    <div className="inline-flex items-center gap-2">
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
                        data-lucide="settings-2"
                        className="lucide lucide-settings-2 w-4 h-4 text-neutral-400"
                      >
                        <path d="M14 17H5"></path>
                        <path d="M19 7h-9"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                      <span className="text-sm font-medium">UTM parameters</span>
                    </div>
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
                      data-lucide="chevron-down"
                      className="lucide lucide-chevron-down w-4 h-4 text-neutral-500"
                      id="utm-caret"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <div
                    id="utm-section"
                    className="px-3 pb-3 pt-0 border-t border-neutral-900 hidden"
                  >
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                          data-lucide="megaphone"
                          className="lucide lucide-megaphone w-4 h-4 text-neutral-500"
                        >
                          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                          <path d="M8 6v8"></path>
                        </svg>
                        <input
                          id="utm-source"
                          type="text"
                          placeholder="utm_source"
                          className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                        />
                      </div>
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
                          data-lucide="gauge"
                          className="lucide lucide-gauge w-4 h-4 text-neutral-500"
                        >
                          <path d="m12 14 4-4"></path>
                          <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                        </svg>
                        <input
                          id="utm-medium"
                          type="text"
                          placeholder="utm_medium"
                          className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                        />
                      </div>
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
                          data-lucide="tag"
                          className="lucide lucide-tag w-4 h-4 text-neutral-500"
                        >
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <input
                          id="utm-campaign"
                          type="text"
                          placeholder="utm_campaign"
                          className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                        />
                      </div>
                    </div>
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
                          data-lucide="book-open"
                          className="lucide lucide-book-open w-4 h-4 text-neutral-500"
                        >
                          <path d="M12 7v14"></path>
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                        <input
                          id="utm-term"
                          type="text"
                          placeholder="utm_term"
                          className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                        />
                      </div>
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
                          data-lucide="puzzle"
                          className="lucide lucide-puzzle w-4 h-4 text-neutral-500"
                        >
                          <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                        </svg>
                        <input
                          id="utm-content"
                          type="text"
                          placeholder="utm_content"
                          className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Right: Preview */}
              <div className="lg:col-span-1">
                <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-4">
                  <div className="text-sm font-medium">Preview</div>
                  <div className="mt-2 text-xs text-neutral-500">Your short link</div>
                  <div className="mt-2 flex items-center justify-between gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2">
                    <div className="truncate text-sm" id="preview-url">
                      {linkData?.short_url?.trim()?.length
                        ? `${siteBaseURL}/${linkData?.short_url}`
                        : 'No valid URL yet'}
                    </div>
                    <button
                      className="cursor-pointer inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 px-2 py-1 text-xs hover:bg-neutral-800 copy-link"
                      id="copy-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (!mainShortURLCopy.current) return;
                        copyOriginalURL(mainShortURLCopy.current);
                      }}
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
                  </div>

                  <div className="mt-4">
                    <div className="text-xs text-neutral-500">QR code</div>
                    <div className="mt-2 rounded-md border border-neutral-900 bg-neutral-950 grid place-items-center p-4">
                      <div
                        id="qr-code"
                        className="bg-white p-2 rounded"
                        title="https://ln.li/launch"
                      >
                        <canvas width="180" height="180" style={{ display: 'none' }}></canvas>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAFPElEQVR4AezS267iOhBFUXT+/6PPA9KWoAng4Nh1Gf2w1UlMedVc87+bfwgUIkDoQmVa5XYjNAtKESB0qTotQ2gOlCJA6FJ1vlumxzdC9+i5zZaEblN1j0UJ3aPnNlsSuk3VPRYldI+e22xJ6Nvt1qbtBosSukHJnVYkdKe2G+xK6AYld1qR0J3abrAroRuU3GnFD0J3QmHXCgQIXaFFO/wRIPQfCv+pQIDQFVq0wx8BQv+h8J8KBAhdocUZOxSZQegiRVrjToDQdw7+FiFA6CJFWuNOgNB3Dv4WIUDoIkVa406A0HcO7/76logAoROVJepnAoT+zMiJRAQInagsUT8TIPRnRk4kIkDoRGWJ+pnAb0J/nu8EAksJEHopbpddTYDQVxM2fykBQi/F7bKrCRD6asLmLyVA6KW4816WJTmhszQl51cECP0VJoeyECB0lqbk/IoAob/C5FAWAoTO0pScXxEg9FeY3h3yLRIBQkdqQ5afCRD6Z4QGRCJA6EhtyPIzAUL/jNCASAQIHakNWX4mcKnQP6czAIFBAoQeBOZ4bAKEjt2PdIMECD0IzPHYBAgdux/pBgkQehCY4y8JhHlJ6DBVCDKDAKFnUDQjDAFCh6lCkBkECD2DohlhCBA6TBWCzCBA6BkU383wbSkBQi/F7bKrCRD6asLmLyVA6KW4XXY1AUJfTdj8pQQIvRS3y64msFPoq3czvyEBQjcsvfLKhK7cbsPdCN2w9MorE7pyuw13I3TD0tevvO5GQq9j7aYFBAi9ALIr1hEg9DrWblpAgNALILtiHQFCr2PtpgUECL0A8rsrfJtLgNBzeZq2mQChNxfg+rkECD2Xp2mbCRB6cwGun0uA0HN5mraZQGChN5NxfUoChE5Zm9BHBAh9RMb7lAQInbI2oY8IEPqIjPcpCRA6ZW3FQk9ch9ATYRq1nwCh93cgwUQChJ4I06j9BAi9vwMJJhIg9ESYRu0nQOj9HbxL4NsgAUIPAnM8NgFCx+5HukEChB4E5nhsAoSO3Y90gwQIPQjM8dgE8godm6t0mwgQehN4115DgNDXcDV1EwFCbwLv2msIEPoarqZuIkDoTeBd+z2BkZOEHqHlbHgChA5fkYAjBAg9QsvZ8AQIHb4iAUcIEHqElrPhCRA6fEXvAvr2TIDQz0Q8pyZA6NT1Cf9MgNDPRDynJkDo1PUJ/0yA0M9EPKcmUFbo1K0If5oAoU+j88OIBAgdsRWZThMg9Gl0fhiRAKEjtiLTaQKEPo3OD4MQeIhB6AccHrITIHT2BuV/IEDoBxweshMgdPYG5X8gQOgHHB6yEyB09gbf5W/4jdANS6+8MqErt9twN0I3LL3yyoSu3G7D3QjdsPTKK3cVunKnrXcjdOv66y1P6Hqdtt6I0K3rr7c8oet12nojQreuv97y/wpdb0cbNSJA6EZld1iV0B1abrQjoRuV3WFVQndoudGOhG5U9vOqFZ8JXbHVxjsRunH5FVcndMVWG+9E6MblV1yd0BVbbbwToV+W72VWAoTO2pzcLwkQ+iUWL7MSIHTW5uR+SYDQL7F4mZUAobM2J/dLAsNCv5ziJQJBCBA6SBFizCFA6DkcTQlCgNBBihBjDgFCz+FoShAChA5SRMAYKSMROmVtQh8RIPQRGe9TEiB0ytqEPiJA6CMy3qckQOiUtQl9RIDQR2TevfctLAFCh61GsDMECH2Gmt+EJUDosNUIdoYAoc9Q85uwBAgdthrBzhCYLfSZDH6DwDQChJ6G0qAIBAgdoQUZphEg9DSUBkUg8D8AAAD///krDhUAAAAGSURBVAMAfpABae3k7IwAAAAASUVORK5CYII="
                          style={{ display: 'block' }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        id="download-qr"
                        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs hover:bg-neutral-800"
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
                          data-lucide="download"
                          className="lucide lucide-download w-3.5 h-3.5"
                        >
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                        Download PNG
                      </button>
                      <button
                        id="refresh-qr"
                        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs hover:bg-neutral-800"
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
                          data-lucide="refresh-ccw"
                          className="lucide lucide-refresh-ccw w-3.5 h-3.5"
                        >
                          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                          <path d="M16 16h5v5"></path>
                        </svg>
                        Refresh
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-neutral-500">
                    Final destination (with UTM):
                    <div id="full-destination" className="mt-1 truncate text-neutral-300">
                      https://example.com/
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-6 py-3 border-t border-neutral-900 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Ensure destination URL is valid (https://)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetFormData}
                  id="reset-form"
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm hover:bg-neutral-800"
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
                    data-lucide="undo"
                    className="lucide lucide-undo w-4 h-4"
                  >
                    <path d="M3 7v6h6"></path>
                    <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path>
                  </svg>
                  Reset
                </button>
                <button
                  id="save-link-footer"
                  onClick={createNewLink}
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 text-black px-3 py-1.5 text-sm font-medium hover:bg-neutral-200"
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateLinkPage;
