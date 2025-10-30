import type { HeaderProps } from '../../types/components.types';

export const HeadingTwo = (props: HeaderProps) => {
  return (
    <h1
      className={`${props.className} text-white text-4xl md:text-5xl font-semibold tracking-tight leading-tight`}
    >
      {props.title}
    </h1>
  );
};
