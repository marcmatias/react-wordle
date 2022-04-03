export const GAME_URL = process.env.REACT_APP_GAME_URL!
export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bom trabalho!', 'Incrível!', 'Muito Bom!']
export const GAME_COPIED_MESSAGE =
  'Resultado copiado para o sua área de transferência'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Não tem letras o suficiente'
export const WORD_NOT_FOUND_MESSAGE = 'Esse nome não é válido'
export const HARD_MODE_ALERT_MESSAGE =
  'Modo dificil só pode ser ativado no inicio do jogo!'
export const HARD_MODE_DESCRIPTION =
  'Qualquer dica revelada deve ser obrigatoriamente utilizada nas próximas tentativas'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'Para maior contraste entre as cores'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `O nome era ${solution}`
export const WELCOME_MESSAGE = (solution: string) =>
  `O nome do dia tem ${solution.length} letras`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tentativa deve conter ${letter}`
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de tentativas'
export const NEW_WORD_TEXT = 'Novo nome em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Média de sucesso'
export const CURRENT_STREAK_TEXT = 'Total de sequência de acertos seguidos'
export const BEST_STREAK_TEXT = 'Melhor sequência de acertos seguidos'
