import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

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

  const classes = classnames(
    'w-12 border-solid border-2 mx-0.5 font-bold rounded dark:text-white select-none',
    {
      'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status && value !== ' ',
      'border-black dark:border-slate-100 ring-1 ring-black dark:ring-white bg-gray-100 dark:bg-gray-800 text-black':
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
        {/* Making all empty cells have an transparent letter to show correct aspect ratio */}
        {value && value !== ' ' ? (
          value
        ) : (
          <span className="text-transparent">X</span>
        )}
      </div>
    </button>
  )
}
