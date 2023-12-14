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
      days: 'date',
    })
  }
}

export const history = new History()