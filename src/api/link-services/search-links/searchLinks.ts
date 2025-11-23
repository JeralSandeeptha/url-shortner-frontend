import logger from '../../../utils/logger';
import { config } from '../../../config/envConfig';
import axiosClient from '../../../config/axiosClient';
import type { Link } from '../../../types/interface.types';

const baseURL = config.VITE_API_URL;

export const searchLinks = async (userId: string, query: string): Promise<Link[]> => {
  try {
    const res = await axiosClient.get(`${baseURL}/gateway/urls/api/v1/url/${userId}/getmyurls`);
    logger.info(res.data);
    const allLinks: Link[] = res.data.data || [];

    // Filter links based on search query
    if (!query.trim()) {
      return [];
    }

    const searchQuery = query.toLowerCase();
    const filteredLinks = allLinks.filter((link) => {
      const matchesShortUrl = link.short_url.toLowerCase().includes(searchQuery);
      const matchesLongUrl = link.long_url.toLowerCase().includes(searchQuery);
      const matchesTags =
        link.tags?.some((tag) => tag.toLowerCase().includes(searchQuery)) || false;
      return matchesShortUrl || matchesLongUrl || matchesTags;
    });

    return filteredLinks;
  } catch (error: unknown) {
    logger.error(error);
    return [];
  }
};
