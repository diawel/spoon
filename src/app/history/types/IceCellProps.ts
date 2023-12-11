import { IceCellDataProps } from './IceCellDataProps'

export type IceCellProps = {
  iceCell: IceCellDataProps
  onIceCellTap: (element: IceCellDataProps) => void
}
