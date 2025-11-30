import { useRef, useState, useEffect } from 'react';
import type { Link as LinkProps } from '../../types/interface.types';
import { dateFormatter } from '../../utils/date';
import { Link, useNavigate } from 'react-router-dom';
import { deleteLink } from '../../api/link-services/delete-link/deleteLink';
import { useAlert } from '../../hooks/useAlert';
import { useLoading } from '../../hooks/useLoading';
import logger from '../../utils/logger';
import { config } from '../../config/envConfig';

interface LinkRowProps extends LinkProps {
  onDelete?: () => void;
}

const LinkRow = (props: LinkRowProps) => {
  const siteBaseURL = `${config.VITE_DOMAIN}`;

  const inputRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isConfirmed = window.confirm('Are you sure you want to delete this URL?');
    if (isConfirmed) {
      setIsMenuOpen(false);
      try {
        await deleteLink({
          addAlert: addAlert,
          linkId: props._id,
          setIsLoading: setIsLoading,
          navigate: navigate,
          skipNavigation: true,
        });
        if (props.onDelete) {
          props.onDelete();
        }
      } catch (error) {
        logger.error(error);
      }
    }
  };

  return (
    <tr key={props._id} className="hover:bg-neutral-900/50 flex items-center justify-between">
      <Link to={`${props._id}`} className="grid grid-cols-5 w-full items-center">
        <td className="py-3 font-medium text-neutral-200 flex items-center">
          <a
            href={`${siteBaseURL}/${props.short_url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            ref={inputRef}
          >
            {props.short_url}
          </a>
        </td>
        <td className="py-3 text-neutral-400 truncate max-w-[180px]">
          <a href={props.long_url} target="_blank" rel="noopener noreferrer">
            {props.long_url}
          </a>
        </td>
        <td className="py-5 flex items-center justify-center gap-2">
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
            className="lucide lucide-bar-chart-2 w-4 h-4 text-emerald-400"
          >
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          {props.clicks}
        </td>
        <td className="py-3">
          <div className="flex gap-1 flex-wrap">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </td>
        <td className="py-3 text-neutral-400">{dateFormatter(props.createdAt)}</td>
      </Link>
      <div className="relative" ref={menuRef}>
        <td className="py-3 text-right">
          <button
            onClick={handleMenuToggle}
            className="cursor-pointer inline-flex hover:bg-neutral-800 bg-neutral-900 border-neutral-800 border rounded-md pt-2 pr-2 pb-2 pl-2 items-center justify-center"
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
              data-lucide="more-vertical"
              className="lucide lucide-more-vertical w-4 h-4 text-neutral-300"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-neutral-800 bg-neutral-900 shadow-lg z-10">
              <div className="py-1">
                <button
                  onClick={handleDelete}
                  className="cursor-pointer w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-neutral-800 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          )}
        </td>
      </div>
    </tr>
  );
};

export default LinkRow;
