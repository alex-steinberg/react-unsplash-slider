import settings, { UNSPLASH_REQ } from "../../settings/settings";
import { UnsplashTopic } from "../../models/unsplash/unsplash.model";

export const fetchTopics = (): Promise<UnsplashTopic[]> => {
  const url = settings.UNSPLASH_URL.TOPICS();
  return getUnsplash(url);
};
export const fetchTopicPhotos = (
  id: string,
  orientation: string
): Promise<any[]> => {
  const url = settings.UNSPLASH_URL.PHOTOS(id, orientation);
  return getUnsplash(url);
};

const getUnsplash = async (url: string): Promise<any> => {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error();
  }
  return data.json();
};
