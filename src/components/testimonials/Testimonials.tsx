const Testimonials = () => {
  return (
    <section className="bg-black border-neutral-900 border-t pt-20 pb-20 relative" id="resources">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-96 -z-10 opacity-80">
        <div
          className="mx-auto max-w-6xl h-full rounded-[32px] blur-3xl"
          style={{
            background: `
      radial-gradient(1200px 400px at 20% 10%, rgba(251,191,36,0.35), transparent 60%),
      radial-gradient(900px 360px at 70% 0%, rgba(244,114,182,0.35), transparent 55%),
      radial-gradient(1200px 500px at 50% 100%, rgba(99,102,241,0.35), transparent 60%)
    `,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="sm:text-4xl text-3xl  font-semibold tracking-tight mb-12 text-white">
            Focus on profit, we’ll handle the rest
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6 bg-neutral-950 border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=96&amp;h=96&amp;auto=format&amp;fit=crop&amp;crop=faces"
                alt="Portrait of Mohamed Elzakey"
                className="w-10 h-10 rounded-full border border-neutral-800"
              />
              <div>
                <div className="font-medium text-white">Mohamed Elzakey</div>
                <div className="text-sm text-neutral-400">Tirhal, Sudan</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              — We are getting more than technology. The team is eager to listen and understand our
              needs. We’ve recently spent two days at the office discussing opportunities and ideas
              for platform development. We know the real people standing behind the product. This is
              what makes our partnership special.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-neutral-100 hover:text-neutral-300"
            >
              Read case study
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
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="rounded-xl border p-6 bg-neutral-950 border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&amp;h=96&amp;auto=format&amp;fit=crop&amp;crop=faces"
                alt="Portrait of Bader Alarjani"
                className="w-10 h-10 rounded-full border border-neutral-800"
              />
              <div>
                <div className="font-medium text-white">Bader Alarjani</div>
                <div className="text-sm text-neutral-400">Kaiian, Saudi Arabia</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              — Why are we market leaders? Smart business strategy, reliable technology, and strong
              marketing. We’ve got everything we needed: a platform that’s easy to use with enough
              front‑rank features to outperform the competition. Besides, the team helps us with
              well‑moderated digital marketing campaigns.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-neutral-100 hover:text-neutral-300"
            >
              Read case study
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
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="rounded-xl border p-6 bg-neutral-950 border-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&amp;h=96&amp;auto=format&amp;fit=crop&amp;crop=faces"
                alt="Portrait of Harith Al Harthy"
                className="w-10 h-10 rounded-full border border-neutral-800"
              />
              <div>
                <div className="font-medium text-white">Harith Al Harthy</div>
                <div className="text-sm text-neutral-400">Otaxi, Oman</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              — With our growth, we needed a dependable solution. The platform gives us robust
              features, transparent analytics, seamless payments, and 24/7 reliability. Our riders
              and partners feel confident using our services. This is why we continue to scale.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-neutral-100 hover:text-neutral-300"
            >
              Read case study
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
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
