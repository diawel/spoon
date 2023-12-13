export type Day = {
  dateString: string // YYYY-MM-DD
  date: Date
  image: Blob
  flavor: string
  colors: { r: number; g: number; b: number }[]
  pattern: number // 0 <= pattern < 5
}
