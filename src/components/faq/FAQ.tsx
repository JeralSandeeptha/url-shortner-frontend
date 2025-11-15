const FAQ = () => {
  return (
    <section className="bg-black border-neutral-900 border-t pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="sm:text-4xl text-3xl font-semibold tracking-tight mb-3">
            Frequently asked questions
          </h2>
          <p className="text-neutral-400">
            Answers to common questions about privacy, analytics, and usage.
          </p>
        </div>
        <div className="divide-y border-y rounded-lg divide-neutral-900 border-neutral-900">
          <details className="group p-5 open:bg-neutral-950">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">Do you use tracking cookies?</span>
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
                data-lucide="chevron-down"
                className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-neutral-400"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <p className="mt-3 text-sm text-neutral-400">
              No. LumenLink uses aggregate, privacy-preserving analytics without cookies or
              fingerprinting. You can also disable analytics per link.
            </p>
          </details>
          <details className="group p-5 open:bg-neutral-950">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">Can I bring my own domain?</span>
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
                data-lucide="chevron-down"
                className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-neutral-400"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <p className="mt-3 text-sm text-neutral-400">
              Yes. Add your domain, verify DNS, and all links will serve over HTTPS with automatic
              renewals.
            </p>
          </details>
          <details className="group p-5 open:bg-neutral-950">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">Is there an API?</span>
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
                data-lucide="chevron-down"
                className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-neutral-400"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <p className="mt-3 text-sm text-neutral-400">
              Our REST API covers links, rules, domains, and analytics. Use tokens with RBAC and
              audit trails for team security.
            </p>
          </details>
          <details className="group p-5 open:bg-neutral-950">
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">What’s your uptime?</span>
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
                data-lucide="chevron-down"
                className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-neutral-400"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <p className="mt-3 text-sm text-neutral-400">
              We target 99.99% with global edge caching and automated failover. Status and incident
              history are public.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
