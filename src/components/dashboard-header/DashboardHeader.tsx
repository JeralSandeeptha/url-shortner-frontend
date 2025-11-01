import type { DashboardHeaderProps } from '../../types/components.types';

const DashboardHeader = (props: DashboardHeaderProps) => {
  return (
    <header className="sticky z-30 bg-black/80 border-neutral-900 border-b top-0 backdrop-blur-xl text-neutral-200">
      <div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="flex h-16 items-center justify-between">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="menu"
                className="lucide lucide-menu w-5 h-5 text-neutral-300"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
            <div className="text-xl font-semibold tracking-tight">{props.title}</div>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="search"
                className="lucide lucide-search w-4 h-4 text-neutral-500"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                type="text"
                placeholder="Search links..."
                className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200"
              />
            </div>
            <button className="rounded-lg p-2 hover:bg-neutral-900 cursor-pointer">
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
                data-lucide="bell"
                className="lucide lucide-bell w-5 h-5 text-neutral-300"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </button>
            <button className="rounded-full border border-neutral-800 p-0.5">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"
                alt="avatar"
                className="cursor-pointer w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
