import PricingCard from '../../molecule/pricing-card/PricingData';
import { pricingPlans } from '../../molecule/pricing-card/pricing-plans';

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 border-t bg-gradient-to-b border-neutral-900 from-neutral-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 text-white ">
            Simple, scalable pricing
          </h2>
          <p className="text-neutral-400">
            Start free. Upgrade as you grow. No tracking cookies, ever.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
