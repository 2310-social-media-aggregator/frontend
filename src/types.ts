export interface Creator {
  'name': string,
  'id': number
};

export interface CreatorPost {
  "creator_id": number
};

export interface User {
  'name': string,
  'follows': Creator[]
};

export interface YoutubeVideo {
  id: string,
  image: string,
  publishedAt: string,
  title: string
};

export interface TwitchVideo {
  id: string,
  title: string,
  published_at: string,
  image: string
};

export interface CreatorInfo {
  id: string,
  type: string,
  attributes: {
    name: string,
    youtube_videos: YoutubeVideo[],
    twitch_videos: TwitchVideo[]
  }
};