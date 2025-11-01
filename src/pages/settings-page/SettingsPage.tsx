import DashboardHeader from '../../components/dashboard-header/DashboardHeader';

const SettingsPage = () => {
  return (
    <>
      {/* Header */}
      <DashboardHeader title="Settings" />

      {/* Content */}
      <section className="sm:px-6 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Profile */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
              <div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">Profile</h2>
                    <p className="text-sm text-neutral-400 mt-1">
                      Manage your personal information
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="user"
                        className="lucide lucide-user w-3.5 h-3.5"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>{' '}
                      Account
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3 flex items-center gap-4 rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                    <img
                      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=256&amp;auto=format&amp;fit=crop"
                      alt="avatar"
                      className="w-12 h-12 rounded-full border border-neutral-800"
                    />
                    <div className="text-sm">
                      <div className="text-neutral-300">Profile photo</div>
                      <div className="text-xs text-neutral-500">Recommended: 256x256px</div>
                    </div>
                    <button className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs hover:bg-neutral-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="upload"
                        className="lucide lucide-upload w-3.5 h-3.5"
                      >
                        <path d="M12 3v12"></path>
                        <path d="m17 8-5-5-5 5"></path>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      </svg>{' '}
                      Change
                    </button>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="text-xs text-neutral-400">First name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs text-neutral-400">Last name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs text-neutral-400">Email</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="text-xs text-neutral-400">Time zone</label>
                    <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="globe-2"
                        className="lucide lucide-globe-2 w-4 h-4 text-neutral-500"
                      >
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                      <select className="w-full bg-transparent py-2.5 pl-2 text-sm text-neutral-200 outline-none">
                        <option className="bg-neutral-900" value="UTC">
                          UTC
                        </option>
                        <option className="bg-neutral-900" value="PST">
                          Pacific Time (PT)
                        </option>
                        <option className="bg-neutral-900" value="EST">
                          Eastern Time (ET)
                        </option>
                        <option className="bg-neutral-900" value="CET">
                          Central European Time (CET)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs text-neutral-400">Bio</label>
                    <textarea
                      rows={3}
                      placeholder="A short bio..."
                      className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end">
                  <button className="settings-save inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-4 py-2.5 text-sm font-medium hover:bg-neutral-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="save"
                      className="lucide lucide-save w-4 h-4"
                    >
                      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                      <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                    </svg>{' '}
                    Save changes
                  </button>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950">
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight">Security</h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Update your password and secure your account
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-neutral-400">Current password</label>
                    <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="lock"
                        className="lucide lucide-lock w-4 h-4 text-neutral-500"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-transparent py-2.5 pl-2 text-sm text-neutral-200 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400">New password</label>
                    <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="key-round"
                        className="lucide lucide-key-round w-4 h-4 text-neutral-500"
                      >
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                      </svg>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-transparent py-2.5 pl-2 text-sm text-neutral-200 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400">Confirm new password</label>
                    <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-lucide="check-circle-2"
                        className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-500"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-transparent py-2.5 pl-2 text-sm text-neutral-200 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                  <div className="text-sm">
                    <div className="text-neutral-300">Two-factor authentication</div>
                    <div className="text-xs text-neutral-500">
                      Add an extra layer of security to your account
                    </div>
                  </div>
                  {/* Toggle  */}
                  <button
                    type="button"
                    className="toggle group relative inline-flex h-6 w-10 items-center rounded-full border border-neutral-800 bg-neutral-900 transition-colors data-[checked=true]:bg-emerald-500/90"
                    role="switch"
                    aria-checked="false"
                    data-checked="false"
                  >
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-neutral-300 transition-all group-data-[checked=true]:translate-x-4 group-data-[checked=true]:bg-white"></span>
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-end">
                  <button className="settings-save inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="shield-check"
                      className="lucide lucide-shield-check w-4 h-4"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>{' '}
                    Update security
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column  */}
          <div className="space-y-6">
            {/* Workspace  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Workspace</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="briefcase"
                  className="lucide lucide-briefcase w-4 h-4 text-neutral-500"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-xs text-neutral-400">Workspace name</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-400">Default domain</label>
                  <div className="mt-1 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="link"
                      className="lucide lucide-link w-4 h-4 text-neutral-500"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <select className="w-full bg-transparent py-2.5 pl-2 text-sm text-neutral-200 outline-none">
                      <option className="bg-neutral-900">lumen.link</option>
                      <option className="bg-neutral-900">short.link</option>
                      <option className="bg-neutral-900">go.acme.com</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-end">
                <button className="settings-save inline-flex items-center gap-2 rounded-lg bg-neutral-100 text-black px-4 py-2.5 text-sm font-medium hover:bg-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="save"
                    className="lucide lucide-save w-4 h-4"
                  >
                    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                  </svg>{' '}
                  Save workspace
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Notifications</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="bell-ring"
                  className="lucide lucide-bell-ring w-4 h-4 text-neutral-500"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                </svg>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm">
                    <div className="text-neutral-300">Product updates</div>
                    <div className="text-xs text-neutral-500">
                      Occasional releases and announcements
                    </div>
                  </div>
                  <button
                    type="button"
                    className="toggle group relative inline-flex h-6 w-10 items-center rounded-full border border-neutral-800 bg-neutral-900 transition-colors data-[checked=true]:bg-emerald-500/90"
                    role="switch"
                    aria-checked="true"
                    data-checked="true"
                  >
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-neutral-300 transition-all group-data-[checked=true]:translate-x-4 group-data-[checked=true]:bg-white"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm">
                    <div className="text-neutral-300">Security alerts</div>
                    <div className="text-xs text-neutral-500">
                      Unusual activity and important notices
                    </div>
                  </div>
                  <button
                    type="button"
                    className="toggle group relative inline-flex h-6 w-10 items-center rounded-full border border-neutral-800 bg-neutral-900 transition-colors data-[checked=true]:bg-emerald-500/90"
                    role="switch"
                    aria-checked="true"
                    data-checked="true"
                  >
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-neutral-300 transition-all group-data-[checked=true]:translate-x-4 group-data-[checked=true]:bg-white"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-950 p-3">
                  <div className="text-sm">
                    <div className="text-neutral-300">Weekly summary</div>
                    <div className="text-xs text-neutral-500">Traffic and engagement overview</div>
                  </div>
                  <button
                    type="button"
                    className="toggle group relative inline-flex h-6 w-10 items-center rounded-full border border-neutral-800 bg-neutral-900 transition-colors data-[checked=true]:bg-emerald-500/90"
                    role="switch"
                    aria-checked="false"
                    data-checked="false"
                  >
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-neutral-300 transition-all group-data-[checked=true]:translate-x-4 group-data-[checked=true]:bg-white"></span>
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-end">
                <button className="notify-save inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="inbox"
                    className="lucide lucide-inbox w-4 h-4"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  </svg>{' '}
                  Save preferences
                </button>
              </div>
            </div>

            {/* Danger zone  */}
            <div className="rounded-2xl border border-neutral-900 bg-neutral-950 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Danger zone</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="alert-triangle"
                  className="lucide lucide-alert-triangle w-4 h-4 text-red-400"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Permanently delete your account and all associated data.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-900 bg-neutral-950 p-4">
                <div className="text-sm">
                  <div className="text-neutral-300">Delete account</div>
                  <div className="text-xs text-neutral-500">This action cannot be undone</div>
                </div>
                <button
                  id="delete-account"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-500/10 text-red-400 px-3 py-1.5 text-sm border border-red-500/30 hover:bg-red-500/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-lucide="trash-2"
                    className="lucide lucide-trash-2 w-4 h-4"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>{' '}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingsPage;
