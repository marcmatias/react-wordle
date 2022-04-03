import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import useWindowDimensions from '../useWindowDimensions'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  dataKey?: number
  inputPosition?: Function
  currentPosition?: number
  isGameWon?: boolean
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  dataKey,
  inputPosition,
  currentPosition,
  isGameWon,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()
  const { height } = useWindowDimensions()

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white select-none',
    {
      'w-10 h-10 text-3xl': height < 666,
      'w-5 h-5 text-base': height < 375,
      'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status && value !== ' ',
      'border-black dark:border-slate-100 border-b-4':
        (value === ' ' && !status && currentPosition === dataKey) ||
        ((value ? /[A-Z]/.test(value) : false) &&
          !status &&
          currentPosition !== undefined &&
          currentPosition === dataKey),
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'correct shadowed bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present shadowed bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct shadowed bg-green-600 text-white border-green-600':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-yellow-600 text-white border-yellow-600':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (inputPosition && !isGameWon) {
      event.currentTarget.blur()
      inputPosition(dataKey)
    }
  }

  return (
    <button
      className={classes}
      style={{ animationDelay }}
      key={dataKey}
      onClick={(event) => handleClick(event)}
    >
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </button>
  )
}
