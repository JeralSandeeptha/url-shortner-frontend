const Header = () => {
  return (
    <header className="fixed z-50 bg-black/80 border-neutral-800 border-b top-0 right-0 left-0 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-8 gap-x-8 gap-y-8 items-center">
            <a href="/" className="flex items-center gap-2.5">
              <div className="h-8 w-auto flex items-center">
                <span className="leading-none text-lg font-semibold tracking-tight text-white">
                  LumenLink
                </span>
              </div>
            </a>
            <nav className="hidden items-center gap-6 text-sm lg:flex text-neutral-400">
              <a className="transition-colors hover:text-neutral-100" href="#product">
                Product
              </a>
              <a className="transition-colors hover:text-neutral-100" href="#solutions">
                Solutions
              </a>
              <a className="transition-colors hover:text-neutral-100" href="#resources">
                Resources
              </a>
              <a className="transition-colors hover:text-neutral-100" href="#pricing">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/login"
              className="hidden md:inline-flex transition-colors hover:text-neutral-100 text-sm font-medium text-neutral-400"
            >
              Sign in
            </a>
            <a
              href="/register"
              className="hidden lg:inline-flex items-center gap-2 sm:px-4 transition-colors hover:bg-neutral-200 text-sm font-medium text-black bg-neutral-100 rounded-lg pt-2 pr-3 pb-2 pl-3"
            >
              <span className="">Get started</span>
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
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right w-3.5 h-3.5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <button
              className="lg:hidden inline-flex transition-colors hover:text-neutral-100 hover:bg-neutral-900 text-neutral-400 rounded-lg pt-2 pr-2 pb-2 pl-2 items-center justify-center"
              id="mobile-menu-button"
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
                className="lucide lucide-menu w-[24px] h-[24px]"
                data-icon-replaced="true"
                style={{ color: 'rgb(245, 245, 245)', width: '24px', height: '24px' }}
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu  */}
      <div
        id="mobile-menu"
        className="lg:hidden border-t backdrop-blur-xl border-neutral-800 bg-black/95"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <nav className="flex flex-col gap-4 mb-6 gap-x-4 gap-y-4">
            <a
              className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400"
              href="#product"
            >
              Product
            </a>
            <a
              className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400"
              href="#solutions"
            >
              Solutions
            </a>
            <a
              className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400"
              href="#resources"
            >
              Resources
            </a>
            <a
              className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400"
              href="#pricing"
            >
              Pricing
            </a>
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-800">
            <a
              href="#"
              className="text-center text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-neutral-100 bg-neutral-900 hover:bg-neutral-800"
            >
              Sign in
            </a>
            <a
              href="#hero-shorten"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
            >
              <span>Get started</span>
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
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right w-3.5 h-3.5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
