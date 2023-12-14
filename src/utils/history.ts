'use client'

import Dexie, { Table } from 'dexie'

export type Ice = {
  dateString: string // YYYY-MM-DD
  date: Date
  image: Blob
  flavor: string
  colors: { r: number; g: number; b: number }[]
  pattern: number
}

class History extends Dexie {
  days!: Table<Ice>

  constructor() {
    super('History')
    this.version(1).stores({
      days: 'dateString',
    })
  }
}

export const history = new History()

export const dateToDbDate = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}
