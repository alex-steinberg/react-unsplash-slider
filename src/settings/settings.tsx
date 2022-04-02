export type UNSPLASH_REQ = "PHOTOS" | "TOPICS";
const settings = {
  UNSPLASH_HOST: "https://api.unsplash.com/",
  UNSPLASH_URL: {
    PHOTOS: (id: string, orientation: string) =>
      `${
        settings.UNSPLASH_HOST
      }topics/${id}/photos?${settings.UNSPLASH_AUTH()}&orientation=${orientation}&per_page=20`,
    TOPICS: () => `${settings.UNSPLASH_HOST}topics?${settings.UNSPLASH_AUTH()}`,
  },
  UNSPLASH_AUTH: () => `client_id=${settings.UNSPLASH_CLIENT_ID}`,
  UNSPLASH_CLIENT_ID: "7jE8riTme7dNqUmrmmYhjqGq0MrvZWvq0H7c6sFbw0M",
};

export default settings;
