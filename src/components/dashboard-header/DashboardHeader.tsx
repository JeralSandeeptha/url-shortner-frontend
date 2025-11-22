import { Link, useNavigate } from 'react-router-dom';
import type { DashboardHeaderProps } from '../../types/components.types';
import type { UserDetails, Link as LinkType } from '../../types/interface.types';
import { useEffect, useState, useRef, type ReactElement } from 'react';
import { useUser } from '../../hooks/useUser';
import { getSingleUser } from '../../api/user-services/get-user/getSingleUser';
import { searchLinks } from '../../api/link-services/search-links/searchLinks';
import { logoutUser } from '../../api/user-services/logout-user/logoutUser';
import { useLoading } from '../../hooks/useLoading';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

interface UserMenuItem {
  label: string;
  icon: ReactElement;
  onClick: () => void;
  className?: string;
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<LinkType[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { user } = useUser();
  const { addAlert } = useAlert();
  const { setIsLoading } = useLoading();
  const { setAuthenticated } = useAuth();
  const { clearLocalStorageItem } = useLocalStorage();

  const getUserData = () => {
    getSingleUser({
      setUserDetails: setUserDetails,
      userId: user,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Debounce search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsSearching(true);
      const results = await searchLinks(user, searchQuery);
      setSearchResults(results);
      setShowDropdown(true);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (!confirmed) return;

    logoutUser({
      addAlert,
      setIsLoading,
      navigate,
      setAuthenticated,
      clearLocalStorageItem,
    });
    setShowUserMenu(false);
  };

  const handleProfileClick = () => {
    navigate('/dashboard/settings');
    setShowUserMenu(false);
  };

  // User menu items - easily extensible
  const userMenuItems: UserMenuItem[] = [
    {
      label: 'Profile',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      onClick: handleProfileClick,
    },
    {
      label: 'Logout',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      ),
      onClick: handleLogout,
      className: 'text-red-400 hover:bg-red-400/10',
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (linkId: string) => {
    setShowDropdown(false);
    setSearchQuery('');
    navigate(`/dashboard/links/${linkId}`);
  };

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
            <div className="flex gap-2 gap-x-2 gap-y-2 items-center">
              {props.isSubHeader && (
                <Link
                  to="/dashboard/links"
                  className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    className="lucide lucide-arrow-left w-4 h-4"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                  </svg>
                  {props.subTitle}
                </Link>
              )}
              <div className="text-xl font-semibold tracking-tight">{props.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative" ref={searchContainerRef}>
              <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2">
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
                  placeholder="Search links globally..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchResults.length > 0) {
                      setShowDropdown(true);
                    }
                  }}
                  className="bg-transparent outline-none text-sm placeholder-neutral-500 text-neutral-200 w-64"
                />
                {isSearching && (
                  <svg
                    className="animate-spin h-4 w-4 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </div>
              {showDropdown && searchQuery.trim() && (
                <div className="absolute top-full left-0 mt-2 bg-neutral-950 border border-neutral-800 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50 w-full min-w-[400px]">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((link) => (
                        <button
                          key={link._id}
                          onClick={() => handleResultClick(link._id)}
                          className="w-full text-left px-4 py-3 hover:bg-neutral-900 transition-colors"
                        >
                          <div className="flex flex-col gap-1">
                            <div className="text-sm font-medium text-neutral-200">
                              {link.short_url}
                            </div>
                            <div className="text-xs text-neutral-400 truncate">{link.long_url}</div>
                            {link.tags && link.tags.length > 0 && (
                              <div className="flex gap-1 flex-wrap mt-1">
                                {link.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center text-neutral-500 text-sm">
                      No links found matching your search.
                    </div>
                  )}
                </div>
              )}
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
            <div
              className="relative"
              ref={userMenuRef}
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <button className="cursor-pointer rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors">
                <img
                  alt="avatar"
                  className="cursor-pointer w-8 h-8 rounded-full"
                  src={
                    userDetails?.image ??
                    'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg border border-neutral-800 bg-neutral-900 shadow-lg z-50">
                  <div className="py-2">
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={item.onClick}
                        className={`cursor-pointer w-full text-left px-4 py-2.5 text-sm text-neutral-200 hover:bg-neutral-800 flex items-center gap-3 transition-colors ${
                          item.className || ''
                        }`}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
