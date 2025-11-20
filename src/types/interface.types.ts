export type UserDetails = {
  user_id: string;
  keycloak_id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  address: string;
  username: string;
  biography: string;
  timeZone: string;
  createdAt: string;
  updatedAt: string;
  aggreed: boolean;
  productUpdates: boolean;
  securityAlerts: boolean;
  weeklySummary: boolean;
  twoFactorAuth: boolean;
  emailVerified: boolean;
  enabled: boolean;
};

export type Link = {
  _id: string;
  long_url: string;
  short_url: string;
  userId: string;
  clicks: number;
  campaignId?: string;
  tags: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
};

export type CreateLinkFields = Pick<
  Link,
  'long_url' | 'short_url' | 'userId' | 'campaignId' | 'tags' | 'status'
>;
