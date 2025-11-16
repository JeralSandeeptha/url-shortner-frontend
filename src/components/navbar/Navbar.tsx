import { Link, useNavigate } from 'react-router-dom';
import { DashboardLogo } from '../logo/Logo';
import { logoutUser } from '../../api/user-services/logout-user/logoutUser';
import { useLoading } from '../../hooks/useLoading';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

const Navbar = () => {
  const navigate = useNavigate();
  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const { setAuthenticated } = useAuth();
  const { clearLocalStorageItem } = useLocalStorage();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (!confirmed) return;

    logoutUser({
      addAlert,
      setIsLoading,
      navigate,
      setAuthenticated,
      clearLocalStorageItem
    });
  };

  return (
    <aside
      className="fixed z-40 hidden lg:flex flex-col bg-neutral-950/80 w-72 border-neutral-900 border-r top-0 bottom-0 left-0 backdrop-blur-xl"
      id="sidebar"
    >
      <div className="flex gap-2 h-16 border-neutral-900 border-b pr-5 pl-5 gap-x-2 gap-y-2 items-center">
        <DashboardLogo />
        <span className="text-lg font-semibold tracking-tight">LumenLink</span>
      </div>
      <nav className="pt-4 pr-3 pb-4 pl-3 space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-900 text-neutral-100"
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
            data-lucide="layout-dashboard"
            className="lucide lucide-layout-dashboard w-4 h-4 text-emerald-400"
          >
            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
          </svg>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link
          to="/dashboard/links"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900"
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
            data-lucide="list"
            className="lucide lucide-list w-4 h-4"
          >
            <path d="M3 5h.01"></path>
            <path d="M3 12h.01"></path>
            <path d="M3 19h.01"></path>
            <path d="M8 5h13"></path>
            <path d="M8 12h13"></path>
            <path d="M8 19h13"></path>
          </svg>
          <span className="text-sm font-medium">Links</span>
        </Link>
        <Link
          to="/dashboard/microsite"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900"
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
            data-lucide="globe"
            className="lucide lucide-globe w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <span className="text-sm font-medium">Microsite</span>
        </Link>
        <Link
          to="/dashboard/campaigns"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900"
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
            data-lucide="megaphone"
            className="lucide lucide-megaphone w-4 h-4"
          >
            <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
            <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
            <path d="M8 6v8"></path>
          </svg>
          <span className="text-sm font-medium">Campaigns</span>
        </Link>
        <Link
          to="/dashboard/custom-link"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900"
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
            data-lucide="sparkles"
            className="lucide lucide-sparkles w-4 h-4"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>
          <span className="text-sm font-medium">Custom Link</span>
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-900"
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
            data-lucide="settings"
            className="lucide lucide-settings w-4 h-4"
          >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>
      <div className="mt-auto p-3">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900"
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
            data-lucide="log-out"
            className="lucide lucide-log-out w-4 h-4"
          >
            <path d="m16 17 5-5-5-5"></path>
            <path d="M21 12H9"></path>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          </svg>
          <span className="text-sm font-medium" onClick={handleLogout}>
            Log out
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
