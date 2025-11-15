import type { TestimonialAuthCardProps } from '../../types/components.types';

export const TestimonialAuthCard = (props: TestimonialAuthCardProps) => {
  const { avatar, name, username, testimonial } = props;
  return (
    <div className="w-full flex-col items-start gap-3 rounded-2xl backdrop-blur-xl border p-5 bg-neutral-900/50 border-neutral-800">
      <div className="text-sm text-white leading-snug mb-2">
        <img src={avatar} className="h-10 mb-2 object-cover rounded-2xl" alt="avatar" />
        <p className="flex items-center gap-1 font-medium">{name}</p>
        <p className="text-neutral-400">{username}</p>
      </div>
      <div className="text-sm text-white leading-snug">
        <p className="mt-1 text-neutral-300">{testimonial}</p>
      </div>
    </div>
  );
};
