interface LauncheEvent {
  id: string
  provider: string
}

export interface IArticleCreateDTO {
  featured: boolean,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: Date,
  launches: LauncheEvent[],
  events: LauncheEvent[]
}
