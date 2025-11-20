import { Link } from 'react-router-dom';
import type { DashboardHeaderProps } from '../../types/components.types';
import type { UserDetails } from '../../types/interface.types';
import { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { getSingleUser } from '../../api/user-services/get-user/getSingleUser';

const DashboardHeader = (props: DashboardHeaderProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(undefined);

  const { user } = useUser();

  const getUserData = () => {
    getSingleUser({
      setUserDetails: setUserDetails,
      userId: user,
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

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
            <button className="cursor-pointer rounded-full border border-neutral-800">
              <img
                alt="avatar"
                className="cursor-pointer w-8 h-8 rounded-full"
                src={
                  userDetails?.image ??
                  'https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
