import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)

  const letterAccentuation = (letter: string, index: number) => {
    const solutionSplited = solution.split('')
    let result = letter
    if (
      letter !== solutionSplited[index] &&
      letter ===
        solutionSplited[index].normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    ) {
      result = solutionSplited[index]
    }

    return result
  }

  return (
    <div className="flex justify-center mb-1 h-full max-h-14">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letterAccentuation(letter, i)}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
