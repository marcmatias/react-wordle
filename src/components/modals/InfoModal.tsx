import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Acerte o nome em 6 tentativas. Depois de cada tentativa a cor das
        células vai mudar exibindo o quão próximo você está do nome correto.
        Lembrando que são <b>nomes próprios de brasileiros(as).</b>
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra M é a que está no lugar correto da palavra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell value="U" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra S está na palavra mas no lugar errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra N não está na palavra em nenhum lugar.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        A base de dados utilizadas é o{' '}
        <a
          href="https://brasil.io/dataset/genero-nomes/nomes/?search=maria&first_name=&group_name=&classification="
          className="underline font-bold"
        >
          dataset de nomes de brasileiros
        </a>{' '}
        do{' '}
        <a href="https://brasil.io" className="underline font-bold">
          Brasil.io
        </a>
        .
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Veja o código fonte desta iteração{' '}
        <a
          href="https://github.com/marcmatias/react-wordle"
          className="underline font-bold"
        >
          Nomes Br
        </a>
        .
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Veja o código fonte do repositório base desta iteração{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          React Wordle
        </a>{' '}
        versão opensource do game que todos conhecemos.
      </p>
    </BaseModal>
  )
}
