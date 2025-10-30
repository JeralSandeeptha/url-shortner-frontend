import { HeadingTwo } from '../../components/heading/Heading';
import notfoundPage from '../../data/notfound.json';

const NotFoundPage = () => {
  const color = notfoundPage?.sections?.[0]?.content?.elements?.[0]?.element_data?.[0]?.color;

  return (
    <div className="min-h-screen antialiased overflow-x-hidden text-neutral-100 bg-black">
      <div className="min-h-screen flex sm:px-6 pr-4 pl-4 items-center justify-center">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-6 text-neutral-400 bg-neutral-900">
            <div className={`w-1.5 h-1.5 rounded-full ${color}`}></div>
            <span>
              {notfoundPage?.sections?.[0]?.content?.elements?.[0]?.element_data?.[1]?.title}
            </span>
          </div>
          <HeadingTwo
            className="mb-4"
            title={notfoundPage?.sections?.[0]?.content?.texts?.[0]?.title || 'Page Not Found'}
          />
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
            {notfoundPage?.sections?.[0]?.content?.texts?.[1]?.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={notfoundPage?.sections?.[0]?.content?.buttons?.[0]?.url}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
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
                data-lucide="arrow-left"
                className="lucide lucide-arrow-left w-4 h-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <span>{notfoundPage?.sections?.[0]?.content?.buttons?.[0]?.text}</span>
            </a>
            <a
              href={notfoundPage?.sections?.[0]?.content?.buttons?.[1]?.url}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium border transition-colors text-neutral-200 border-neutral-800 bg-neutral-950 hover:bg-neutral-900"
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
                data-lucide="life-buoy"
                className="lucide lucide-life-buoy w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="m4.93 4.93 4.24 4.24"></path>
                <path d="m14.83 9.17 4.24-4.24"></path>
                <path d="m14.83 14.83 4.24 4.24"></path>
                <path d="m9.17 14.83-4.24 4.24"></path>
              </svg>
              <span>{notfoundPage?.sections?.[0]?.content?.buttons?.[1]?.text}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
