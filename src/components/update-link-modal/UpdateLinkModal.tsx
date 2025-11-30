import { useState, useEffect } from 'react';
import type { Link } from '../../types/interface.types';
import { linkStatus } from '../../constants/link-status';

interface UpdateLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  link: Link | undefined;
  onUpdate: (updatedData: {
    status: 'active' | 'inactive';
    tags: string[];
    long_url: string;
  }) => void;
}

const UpdateLinkModal = ({ isOpen, onClose, link, onUpdate }: UpdateLinkModalProps) => {
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

  useEffect(() => {
    if (link) {
      setStatus(link.status);
      setTags(link.tags || []);
      setDestination(link.long_url);
      setTagInput('');
    }
  }, [link, isOpen]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      status,
      tags,
      long_url: destination,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl border border-neutral-900 bg-neutral-950 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-100">Update Link</h2>
          <button
            onClick={onClose}
            className="cursor-pointer inline-flex items-center justify-center rounded-md p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
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
              className="lucide lucide-x w-5 h-5"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Destination Field */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-950">
            <label className="block text-[11px] text-neutral-500 mb-1 px-3 pt-3">Destination</label>
            <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-3 mx-3 mb-3">
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
              <input
                type="url"
                placeholder="Destination URL (https://example.com/page)"
                className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-full py-2.5 pl-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Status Field */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-950">
            <label className="block text-[11px] text-neutral-500 mb-1 px-3 pt-3">Status</label>
            <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-3 mx-3 mb-3">
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
                className="lucide lucide-activity w-4 h-4 text-neutral-500"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
              <select
                className="bg-transparent py-2.5 pl-2 pr-6 text-sm text-neutral-200 outline-none w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'active' | 'inactive')}
                required
              >
                {linkStatus.map((linkStatusOption) => (
                  <option
                    key={linkStatusOption.value}
                    className="bg-neutral-900"
                    value={linkStatusOption.value}
                  >
                    {linkStatusOption.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags Field */}
          <div className="rounded-lg border border-neutral-900 bg-neutral-950">
            <label className="block text-[11px] text-neutral-500 mb-1 px-3 pt-3">
              Tags (optional)
            </label>
            <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-3 mx-3 mb-3">
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
              <input
                type="text"
                placeholder="Type a tag and press Enter"
                className="bg-transparent py-2.5 pl-2 pr-2 text-sm text-neutral-200 outline-none w-full placeholder-neutral-500"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
            </div>
            {tags.length > 0 && (
              <div className="px-3 pb-3 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-blue-500/10 text-blue-400 px-4 py-2 text-sm border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
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
        </form>
      </div>
    </div>
  );
};

export default UpdateLinkModal;

