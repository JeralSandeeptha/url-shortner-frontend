const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold mb-2">LumenLink</div>
            <p className="text-sm text-neutral-400">Fast, privacy‑first URL shortener for teams.</p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Product</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#product">
                  Overview
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#solutions">
                  Solutions
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Resources</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#resources">
                  Docs
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#">
                  API
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Company</div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-neutral-200" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © <span id="year">2025</span> LumenLink. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-neutral-300">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-neutral-300">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-neutral-300">
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
