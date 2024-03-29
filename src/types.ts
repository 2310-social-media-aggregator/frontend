export interface Creator {
  'name': string,
  'id': number
}

export interface User {
  'name': string,
  'follows': Creator[]
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


