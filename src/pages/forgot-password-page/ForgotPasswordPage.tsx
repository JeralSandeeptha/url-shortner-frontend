import forgotpasswordPage from '../../data/forgot_password.json';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex text-neutral-100 bg-black pr-4 pl-4 items-center justify-center">
      <div className="w-full max-w-md">
        <a
          href="/login"
          className="inline-flex items-center gap-2 text-neutral-300 hover:text-neutral-100 mb-6"
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
          <span className="text-sm">
            {forgotpasswordPage.sections?.[0]?.content?.links?.[1]?.text}
          </span>
        </a>

        <div className="rounded-xl border p-6 sm:p-8 border-neutral-800 bg-neutral-950">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
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
                  data-lucide="key-round"
                  className="lucide lucide-key-round w-4 h-4"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
              </div>
              <div className="text-lg font-semibold tracking-tight">
                {forgotpasswordPage.sections?.[0]?.content?.texts?.[1]?.subtitle}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {forgotpasswordPage.sections?.[0]?.content?.texts?.[0]?.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              {forgotpasswordPage.sections?.[0]?.content?.texts?.[2]?.description}
            </p>
          </div>

          <form id="forgot-form" className="space-y-4">
            <div className="flex items-center gap-2 rounded-lg border px-3 py-2.5 focus-within:border-neutral-700 border-neutral-800 bg-neutral-950">
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
                data-lucide="mail"
                className="lucide lucide-mail w-4 h-4 text-neutral-400"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <input
                id={forgotpasswordPage.sections?.[0]?.content?.fields?.[0]?.field_id}
                type={forgotpasswordPage.sections?.[0]?.content?.fields?.[0]?.type}
                placeholder={forgotpasswordPage.sections?.[0]?.content?.fields?.[0]?.placeholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 text-neutral-100"
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
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
                data-lucide="send"
                className="lucide lucide-send w-4 h-4"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span>{forgotpasswordPage.sections?.[0]?.content?.buttons?.[0]?.text}</span>
            </button>
          </form>

          <div className="flex gap-3 items-center mt-4 text-sm text-neutral-400">
            {forgotpasswordPage.sections?.[0]?.content?.texts?.[4]?.rememberText}
            <a
              href={forgotpasswordPage.sections?.[0]?.content?.links?.[0]?.url}
              className="text-neutral-200 hover:text-white font-medium"
            >
              {forgotpasswordPage.sections?.[0]?.content?.links?.[0]?.text}
            </a>
          </div>
        </div>

        <p className="text-xs text-neutral-500 text-center mt-6">
          {forgotpasswordPage.sections?.[0]?.content?.texts?.[3]?.spamText}
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
