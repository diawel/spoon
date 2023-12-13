export type Day = {
  dateString: string // YYYY-MM-DD
  date: Date
  image: Blob
  flavor: string
  colors: { r: number; g: number; b: number }[]
  pattern: number // 0 <= pattern < 5
}

export type FridgeViewProps = {
  historyData: Day[]
  onIceCellTap: (element: Day) => void
}

export type IceCellProps = {
  iceCell: Day
  onIceCellTap: (element: Day) => void
}

export type PhotoViewProps = {
  selectedElement: Day | null
}
