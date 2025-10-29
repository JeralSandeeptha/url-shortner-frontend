import type { TestimonialAuthCardProps } from '../../types/components.types';

export const TestimonialAuthCard = (props: TestimonialAuthCardProps) => {
  const { avatar, name, username, testimonial } = props;
  return (
    <div className="flex items-start gap-3 rounded-2xl backdrop-blur-xl border p-5 w-64 bg-neutral-900/50 border-neutral-800">
      <img src={avatar} className="h-10 w-10 object-cover rounded-2xl" alt="avatar" />
      <div className="text-sm leading-snug">
        <p className="flex items-center gap-1 font-medium">{name}</p>
        <p className="text-neutral-400">{username}</p>
        <p className="mt-1 text-neutral-300">{testimonial}</p>
      </div>
    </div>
  );
};
