export type Views = {
  views: number
}

export type Reactions = {
  likes: number
  loves: number
  tils: number
  hahas: number
  wows: number
  sparkles: number
}

export type BlogData = Views & Reactions

export type GuestbookEntrys = Array<{
  id: number
  body: string
  image: string
  created_by: string
  updated_at: Date
}>

export type APIResponse = {
  count: number
}

export type Song = {
  isPlaying?: boolean
  name: string
  artist: string
  album: string
  albumImage: string
  songUrl: string
}

export type GitHubData = {
  stars: number
  followers: number
}

export type WakatimeRes = {
  data: {
    decimal: string
    digital: string
    is_up_to_date: boolean
    percent_calculated: number
    range: {
      end: string
      end_date: string
      end_text: string
      start: string
      start_date: string
      start_text: string
      timezone: string
    }
    text: string
    timeout: number
    total_seconds: number
  }
}

export type WakatimeData = {
  seconds: number
}

export type AnalyticsData = {
  visitors: number
}
