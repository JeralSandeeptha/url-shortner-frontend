import type { PricingPlan } from '../../types/interface.types';

interface PricingCardProps {
  plan: PricingPlan;
}

const CheckIcon = () => (
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
    data-lucide="check"
    className="lucide lucide-check w-4 h-4 mt-0.5 text-emerald-400"
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const PricingCard = ({ plan }: PricingCardProps) => {
  const isPopular = plan.isPopular;
  
  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col justify-between flex-grow ${
        isPopular ? 'relative border-2 border-emerald-800 bg-gradient-to-br from-emerald-900/20 to-lime-900/40 glow-animate' : 'border-neutral-700'
      } bg-neutral-950`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 right-4 text-[11px] rounded-full px-3 py-1 pb-1.5 bg-emerald-500/90 border text-white border-emerald-400/30">
          Most popular
        </div>
      )}
      <div className="flex flex-col">
        <div className="text-sm font-semibold text-neutral-300 pb-1">{plan.name}</div>
        <div className="mt-2 text-3xl font-semibold text-white">{plan.price}</div>
        <div className="text-xs text-neutral-400">{plan.period}</div>

        <ul className="mt-6 space-y-3 text-sm text-neutral-300">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={plan.buttonHref}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm  transition-colors ${
          isPopular
            ? 'text-white bg-emerald-600/50 hover:bg-emerald-200/30  font-bold'
            : 'text-black bg-neutral-100 hover:bg-neutral-200 font-semibold'
        }`}
      >
        {plan.buttonText}
      </a>
    </div>
  );
};

export default PricingCard;
