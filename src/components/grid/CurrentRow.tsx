import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  className: string
  inputPosition: Function
  currentPosition: number
  isGameWon?: boolean
}

export const CurrentRow = ({
  guess,
  className,
  inputPosition,
  currentPosition,
  isGameWon,
}: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          dataKey={i}
          inputPosition={inputPosition}
          currentPosition={currentPosition}
          isGameWon={isGameWon}
        />
      ))}
      {emptyCells.map((_, i) => (
        <Cell
          key={i}
          dataKey={i}
          inputPosition={inputPosition}
          currentPosition={currentPosition}
          isGameWon={isGameWon}
        />
      ))}
    </div>
  )
}
