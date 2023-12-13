import styles from './index.module.css'
import { CaptureData } from '..'
import Icecream from '@/components/Icecream'

export type ResultViewProps = {
  captureData: CaptureData
}

const ResultView: React.FC<ResultViewProps> = ({ captureData }) => {
  const { date, image, flavor, colors, pattern } = captureData
  return (
    <div className={styles['container']}>
      <div className={styles['colors']}>
        {colors.map((color, i) => (
          <div
            key={i}
            className={styles['color']}
            style={{
              backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            }}
          />
        ))}
      </div>
      {flavor}
      <Icecream {...{ pattern, colors }} />
    </div>
  )
}

export default ResultView
