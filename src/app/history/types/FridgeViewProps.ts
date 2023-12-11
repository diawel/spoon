import { IceCellDataProps } from './IceCellDataProps'

export type FridgeViewProps = {
  historyData: IceCellDataProps[]
  onIceCellTap: (element: IceCellDataProps) => void
}
