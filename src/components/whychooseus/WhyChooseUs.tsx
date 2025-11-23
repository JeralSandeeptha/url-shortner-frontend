const WhyChooseUs = () => {
  return (
    <section
      id="solutions"
      className="bg-gradient-to-b from-black to-neutral-950 border-neutral-900 border-t pt-20 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
            Built for marketing, product, and DevOps
          </h2>
          <p className="mb-10 text-neutral-400">
            Powerful enough for engineering. Simple enough for everyone else. Use LumenLink for
            campaigns, customer support, internal tools, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group transition-colors border rounded-xl pt-6 pr-6 pb-6 pl-6 hover:border-neutral-700 bg-neutral-950 border-neutral-800">
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 grid place-items-center text-emerald-400">
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
                    data-lucide="megaphone"
                    className="lucide lucide-megaphone w-4 h-4"
                  >
                    <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                    <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                    <path d="M8 6v8"></path>
                  </svg>
                </div>
                <div className="font-medium">Marketing</div>
              </div>
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
                data-lucide="arrow-up-right"
                className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
            <p className="text-sm text-neutral-400">
              Campaign links with UTM tagging, A/B routing, and QR codes for offline channels.
            </p>
          </div>
          <div className="group rounded-xl border p-6 transition-colors border-neutral-800 bg-neutral-950 hover:border-neutral-700">
            <div className="flex mb-3 items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 grid place-items-center text-indigo-400">
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
                    data-lucide="headset"
                    className="lucide lucide-headset w-4 h-4"
                  >
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                  </svg>
                </div>
                <div className="font-medium">Support</div>
              </div>
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
                data-lucide="arrow-up-right"
                className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
            <p className="text-sm text-neutral-400">
              Track link usage from emails and chats. Prevent link rot with bulk updates and rules.
            </p>
          </div>
          <div className="group rounded-xl border p-6 transition-colors border-neutral-800 bg-neutral-950 hover:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 grid place-items-center text-amber-400">
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
                    data-lucide="server-cog"
                    className="lucide lucide-server-cog w-4 h-4"
                  >
                    <path d="m10.852 14.772-.383.923"></path>
                    <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path>
                    <path d="m13.148 9.228.383-.923"></path>
                    <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path>
                    <path d="m14.772 10.852.923-.383"></path>
                    <path d="m14.772 13.148.923.383"></path>
                    <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path>
                    <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path>
                    <path d="M6 18h.01"></path>
                    <path d="M6 6h.01"></path>
                    <path d="m9.228 10.852-.923-.383"></path>
                    <path d="m9.228 13.148-.923.383"></path>
                  </svg>
                </div>
                <div className="font-medium">Engineering</div>
              </div>
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
                data-lucide="arrow-up-right"
                className="lucide lucide-arrow-up-right w-4 h-4 text-neutral-500 group-hover:text-neutral-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
            <p className="text-sm text-neutral-400">
              Infrastructure-grade redirects, API tokens, SSO, and audit logs for compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
