export interface Creator {
  "id": number,
  "type": string,
  "attributes": Attributes,
}

export interface Attributes {
  "name": string,
  "youtube_videos": Youtube[]
}

export interface Youtube {
  "id": string,
  "image": string,
  "publishedAt": string,
  "title": string
}