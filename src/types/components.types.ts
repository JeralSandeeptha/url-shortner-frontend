import type { AlertType } from "./context.types";

export type TestimonialAuthCardProps = {
  id: string;
  avatar: string;
  name: string;
  username: string;
  testimonial: string;
};

export type HeaderProps = {
  title: string;
  className?: string;
};

export type DashboardHeaderProps = {
  title: string;
  isSubHeader?: boolean;
  subTitle?: string;
};

export type AlertProps = {
  id: string;
  title: string
  message: string;
  type: AlertType;
};