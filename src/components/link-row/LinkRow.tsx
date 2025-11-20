import { useRef } from 'react';
import type { Link as LinkProps } from '../../types/interface.types';
import { dateFormatter } from '../../utils/date';
import { Link } from 'react-router-dom';

const LinkRow = (props: LinkProps) => {
  const inputRef = useRef<HTMLAnchorElement>(null);

  return (
    <tr key={props._id} className="hover:bg-neutral-900/50 flex items-center justify-between">
      <Link to={`${props._id}`} className="grid grid-cols-5 w-full items-center">
        <td className="py-3 font-medium text-neutral-200 flex items-center">
          <a
            href={`http://localhost:5173/${props.short_url}`}
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
      <div>
        <td className="py-3 text-right">
          <button className="cursor-pointer inline-flex hover:bg-neutral-800 bg-neutral-900 border-neutral-800 border rounded-md pt-2 pr-2 pb-2 pl-2 items-center justify-center">
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
        </td>
      </div>
    </tr>
  );
};

export default LinkRow;
