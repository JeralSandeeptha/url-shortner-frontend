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
      className={`rounded-2xl border p-6 flex flex-col ${
        isPopular ? 'relative border-2 border-emerald-700/20' : 'border-neutral-800 shadow-lg'
      } bg-neutral-950`}
    >
      {isPopular && (
        <div className="absolute -top-3 right-4 text-[11px] rounded-full px-2 py-0.5 bg-emerald-500/10 border text-emerald-300 border-emerald-400/30">
          Most popular
        </div>
      )}

      <div className={`text-sm font-medium text-neutral-300 ${isPopular ? 'text-md text-emerald-400' : 'text-md text-emerald-400'}`}>{plan.name}</div>
      <div className="mt-2 text-3xl font-semibold">{plan.price}</div>
      <div className="text-xs text-neutral-500">{plan.period}</div>

      <ul className="mt-6 space-y-3 text-sm text-neutral-300">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={plan.buttonHref}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-black bg-neutral-100 hover:bg-neutral-200"
      >
        {plan.buttonText}
      </a>
    </div>
  );
};

export default PricingCard;
