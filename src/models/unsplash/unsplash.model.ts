export interface UnsplashTopic {
  id: string;
  title: string;
}

interface UnsplashPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface UnsplashPhoto {
  description: string;
  id: string;
  urls: UnsplashPhotoUrls;
}
