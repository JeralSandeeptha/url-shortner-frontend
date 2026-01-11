import Accordion from '../../atoms/Accordion';
import { faqData } from './faq-data';

const FaqAccordion = () => {
  return (
    <div className="divide-y border-y rounded-lg divide-neutral-900 border-neutral-900">
      {faqData.map((item) => (
        <Accordion key={item.id} title={item.question}>
          {item.answer}
        </Accordion>
      ))}
    </div>
  );
};

export default FaqAccordion;
