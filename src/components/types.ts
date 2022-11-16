export interface IProps {
  id: string
  lang?: 'tr_TR' | 'en_US' | 'en_RU' | 'ru_RU' | 'ru_UA' | 'uk_UA'
  children: React.ReactNode
  hoverColor?: string
  onChange?: (value: string) => void
  style?: string
}

export interface IStyleProps {
  style?: string
  hoverColor?: string
}
