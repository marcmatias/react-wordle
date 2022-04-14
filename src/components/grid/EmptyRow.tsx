import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="flex justify-center mb-1 h-full max-h-14">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
