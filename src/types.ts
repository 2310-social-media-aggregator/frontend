export interface Creator {
  'name': string,
  'id': number
}

export interface User {
  'name': string,
  'follows': Creator[]
}

export interface YoutubeVideo {
  id: string;
  image: string;
  publishedAt: string;
  title: string;
}

export interface TwitchVideo {
  id: string;
  title: string;
  published_at: string;
  image: string;
}

export interface CreatorInfo {
  id: number;
  type: string;
  attributes: {
    name: string;
    youtube_videos: YoutubeVideo[];
    twitch_videos: TwitchVideo[];
  };
}

//=============================================

// export interface Creator {
//   "id": number,
//   "type": string,
//   "attributes": Attributes,
// }

// export interface Attributes {
//   "name": string,
//   "youtube_videos": Youtube[]
// }

// export interface Youtube {
//   "id": string,
//   "image": string,
//   "publishedAt": string,
//   "title": string
// }


