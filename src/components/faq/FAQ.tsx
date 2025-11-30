import FAQAccordion from '../../molecule/faq-data/FAQAccordion';

const FAQ = () => {
  return (
    <section className="bg-black border-neutral-900 border-t pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="sm:text-4xl text-3xl font-semibold tracking-tight mb-3 text-white">
            Frequently asked questions
          </h2>
          <p className="text-neutral-400">
            Answers to common questions about privacy, analytics, and usage.
          </p>
        </div>
        <FAQAccordion />
      </div>
    </section>
  );
};

export default FAQ;
