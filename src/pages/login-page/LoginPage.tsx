import { HeadingTwo } from '../../components/heading/Heading';
import { TestimonialAuthCard } from '../../components/testimonial/Testimonial';
import loginPage from '../../data/login.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/useAlert';
import { useLoading } from '../../hooks/useLoading';
import { sanitizeEmail, sanitizePassword } from '../../utils/sanitizeFields';
import { validateEmail, validatePassword } from '../../utils/validateFields';
import LoadingComponent from '../../components/loading-component/LoadingComponent';
import { loginUser } from '../../api/user-services/login-user/loginUser';
import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { addAlert } = useAlert();
  const { isLoading, setIsLoading } = useLoading();
  const { setAuthenticated } = useAuth();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // sanitize fields
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedPassword = sanitizePassword(password);

    // validate fields
    if (!validateEmail(sanitizedEmail)) {
      addAlert('Please enter a valid email address', 'warning');
      return;
    }

    if (!validatePassword(sanitizedPassword)) {
      addAlert('Password must be at least 6 characters long', 'warning');
      return;
    }

    loginUser({
      userDetails: {
        email: sanitizedEmail || '',
        password: sanitizedPassword || '',
      },
      setEmail: setEmail,
      setPassword: setPassword,
      navigate: navigate,
      addAlert: addAlert,
      setIsLoading: setIsLoading,
      setAuthenticated: setAuthenticated,
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row bg-black"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {isLoading && <LoadingComponent />}
      {/* Left column: sign‑in form  */}
      <section className="flex-1 flex pt-8 pr-8 pb-8 pl-8 items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            {/* Logo  */}
            <div className="w-12 h-12 rounded-2xl border backdrop-blur flex items-center justify-center border-neutral-800 bg-neutral-950/60">
              <span className="text-sm font-semibold tracking-tight text-white">LL</span>
            </div>

            {/* Heading  */}
            <HeadingTwo
              title={loginPage?.sections?.[0]?.content?.texts?.[0]?.title || 'Welcome Back'}
            />
            <p className="text-neutral-400">
              {loginPage?.sections?.[0]?.content?.texts?.[1]?.subtitle}
            </p>

            {/* Form  */}
            <form className="space-y-5">
              <div>
                <label className="text-sm font-medium text-neutral-400">
                  {loginPage?.sections?.[0]?.content?.fields?.[0]?.label}
                </label>
                <div className="mt-2 flex-1 flex gap-2 focus-within:border-neutral-700 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-2 gap-y-2 items-center bg-neutral-950 border-neutral-800">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id={loginPage?.sections?.[0]?.content?.fields?.[0]?.field_id}
                    type={loginPage?.sections?.[0]?.content?.fields?.[0]?.type}
                    placeholder={loginPage?.sections?.[0]?.content?.fields?.[0]?.placeholder}
                    className="placeholder:text-neutral-500 outline-none text-sm bg-transparent w-full flex-1 text-neutral-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-400">
                  {loginPage?.sections?.[0]?.content?.fields?.[1]?.label}
                </label>
                <div className="mt-2 flex-1 flex gap-2 focus-within:border-neutral-700 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-3 gap-x-2 gap-y-2 items-center relative bg-neutral-950 border-neutral-800">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id={loginPage?.sections?.[0]?.content?.fields?.[1]?.field_id}
                    type={loginPage?.sections?.[0]?.content?.fields?.[1]?.type}
                    placeholder={loginPage?.sections?.[0]?.content?.fields?.[1]?.placeholder}
                    className="bg-transparent text-sm w-full flex-1 placeholder:text-neutral-500 outline-none text-neutral-100"
                  />
                  <button
                    type="button"
                    id="togglePw"
                    className="absolute inset-y-0 right-3 flex items-center text-neutral-500 transition-colors hover:text-neutral-300"
                    aria-label="Toggle password visibility"
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
                      data-lucide="eye"
                      className="lucide lucide-eye w-5 h-5"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input type="checkbox" className="peer sr-only" />
                  <span className="relative h-[18px] w-[18px] rounded-md border grid place-items-center transition-colors peer-checked:bg-emerald-500 peer-checked:border-emerald-500 border-neutral-700 bg-neutral-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-lucide="check"
                      className="lucide lucide-check h-3.5 w-3.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-neutral-300">
                    {loginPage?.sections?.[0]?.content?.texts?.[4]?.rememberText}
                  </span>
                </label>
                <a
                  href={loginPage?.sections?.[0]?.content?.links?.[0]?.url}
                  className="transition-colors hover:text-emerald-300 text-emerald-400"
                >
                  {loginPage?.sections?.[0]?.content?.links?.[0]?.text}
                </a>
              </div>

              <button
                type="submit"
                onClick={(e) => login(e)}
                className="text-black bg-white transition-colors w-full border-neutral-800 border rounded-lg pt-3.5 pr-3 pb-3.5 pl-3 cursor-pointer"
              >
                {loginPage?.sections?.[0]?.content?.buttons?.[0]?.text}
              </button>
            </form>

            {/* Divider  */}
            <div className="relative flex items-center justify-center">
              <span className="w-24 border-t border-neutral-800"></span>
              <span className="px-4 text-sm text-neutral-500 text-center">
                {loginPage?.sections?.[0]?.content?.texts?.[3]?.changeAuthText}
              </span>
              <span className="w-24 border-t border-neutral-800"></span>
            </div>

            {/* Google sign in */}
            <button className="text-white w-full flex items-center justify-center gap-3 rounded-lg py-3.5 px-3 border transition-colors border-neutral-800 bg-neutral-950 hover:bg-neutral-900 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-lucide="globe"
                className="lucide lucide-globe w-[18px] h-[18px] text-neutral-300"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              {loginPage?.sections?.[0]?.content?.buttons?.[1]?.text}
            </button>

            <p className="flex items-center justify-center text-center text-sm text-neutral-500 gap-2">
              {loginPage?.sections?.[0]?.content?.texts?.[2]?.createAccountText}
              <a
                href={loginPage?.sections?.[0]?.content?.links?.[1]?.url}
                className="transition-colors hover:text-emerald-300 text-emerald-400"
              >
                {loginPage?.sections?.[0]?.content?.links?.[1]?.text}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Right column: hero image + testimonials  */}
      <section className="hidden lg:block flex-1 relative">
        <div className="absolute inset-0 mt-4 mr-4 mb-4 ml-4 rounded-2xl border overflow-hidden border-neutral-800 bg-[url('https://images.unsplash.com/photo-1665652475985-37e285aeff53?w=2560&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1665652475985-37e285aeff53?w=2560&amp;q=80)]"></div>
          <div className="bg-gradient-to-tr to-transparent from-black/60 via-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
          {/* Testimonials  */}
          <div className="w-full absolute bottom-0 p-8 bg-amber-5">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {loginPage?.sections?.[1]?.content?.testimonials?.map((testimonial) => {
                return (
                  <SwiperSlide>
                    <TestimonialAuthCard {...testimonial} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
