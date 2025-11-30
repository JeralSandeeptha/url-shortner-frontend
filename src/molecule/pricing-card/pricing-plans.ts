import type { PricingPlan } from '../../types/interface.types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    isPopular: false,
    features: [
      '1,000 clicks / mo',
      'Basic analytics',
      '1 custom domain',
    ],
    buttonText: 'Get started',
    buttonHref: '#',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    period: 'per month',
    isPopular: true,
    features: [
      '50,000 clicks / mo',
      'Advanced analytics',
      '5 custom domains',
      'Smart routing rules',
      'API access',
    ],
    buttonText: 'Start Pro',
    buttonHref: '#',
  },
  {
    id: 'teams',
    name: 'Teams',
    price: '$79',
    period: 'per month',
    isPopular: false,
    features: [
      '500,000 clicks / mo',
      'SSO, roles & audit logs',
      'Priority support',
      'Webhooks & integrations',
    ],
    buttonText: 'Contact sales',
    buttonHref: '#',
  },
];
