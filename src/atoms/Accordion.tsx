import type { AccordionProps } from '../types/interface.types';

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    data-lucide="chevron-down"
    className="lucide lucide-chevron-down w-5 h-5 transition-transform group-open:rotate-180 text-neutral-400"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <details className="group p-5 open:bg-neutral-950">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-medium text-white">{title}</span>
        <ChevronIcon />
      </summary>
      <div className="mt-5 text-sm text-neutral-400 rounded-md px-4 py-4 border border-emerald-500/30">
        {children}
      </div>
    </details>
  );
};

export default Accordion;
