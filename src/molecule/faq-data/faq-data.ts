import type { FAQItem } from '../../types/interface.types';

export const faqData: FAQItem[] = [
  {
    id: 'tracking-cookies',
    question: 'Do you use tracking cookies?',
    answer:
      'No. LumenLink uses aggregate, privacy-preserving analytics without cookies or fingerprinting. You can also disable analytics per link.',
  },
  {
    id: 'custom-domain',
    question: 'Can I bring my own domain?',
    answer:
      'Yes. Add your domain, verify DNS, and all links will serve over HTTPS with automatic renewals.',
  },
  {
    id: 'api',
    question: 'Is there an API?',
    answer:
      'Our REST API covers links, rules, domains, and analytics. Use tokens with RBAC and audit trails for team security.',
  },
  {
    id: 'uptime',
    question: "What's your uptime?",
    answer:
      'We target 99.99% with global edge caching and automated failover. Status and incident history are public.',
  },
];
