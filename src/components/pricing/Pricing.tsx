const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 border-t bg-gradient-to-b border-neutral-900 from-neutral-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
            Simple, scalable pricing
          </h2>
          <p className="text-neutral-400">
            Start free. Upgrade as you grow. No tracking cookies, ever.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free  */}
          <div className="rounded-2xl border p-6 flex flex-col border-neutral-800 bg-neutral-950">
            <div className="text-sm font-medium text-neutral-300">Free</div>
            <div className="mt-2 text-3xl font-semibold">$0</div>
            <div className="text-xs text-neutral-500">forever</div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-300">
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                1,000 clicks / mo
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                Basic analytics
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                1 custom domain
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
            >
              Get started
            </a>
          </div>
          {/* Pro  */}
          <div className="rounded-2xl border-2 p-6 flex flex-col relative border-neutral-700 bg-neutral-950">
            <div className="absolute -top-3 right-4 text-[11px] rounded-full px-2 py-0.5 bg-emerald-500/10 border text-emerald-300 border-emerald-400/30">
              Most popular
            </div>
            <div className="text-sm font-medium text-neutral-300">Pro</div>
            <div className="mt-2 text-3xl font-semibold">$19</div>
            <div className="text-xs text-neutral-500">per month</div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-300">
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                50,000 clicks / mo
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                Advanced analytics
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                5 custom domains
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                Smart routing rules
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                API access
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
            >
              Start Pro
            </a>
          </div>
          {/* Teams  */}
          <div className="rounded-2xl border p-6 flex flex-col border-neutral-800 bg-neutral-950">
            <div className="text-sm font-medium text-neutral-300">Teams</div>
            <div className="mt-2 text-3xl font-semibold">$79</div>
            <div className="text-xs text-neutral-500">per month</div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-300">
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                500,000 clicks / mo
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                SSO, roles &amp; audit logs
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                Priority support
              </li>
              <li className="flex gap-2">
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
                  data-lucide="check"
                  className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{' '}
                Webhooks &amp; integrations
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
