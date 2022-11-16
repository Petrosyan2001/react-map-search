import styled, { createGlobalStyle } from 'styled-components'
import { IStyleProps } from './types'
export const MainBlock = styled.div`
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
.ymaps-2-1-79-search__suggest-item_selected_yes{
  background: ${(props: IStyleProps) => props.hoverColor || 'rgba(25, 118, 210, 0.12)'}!important
}
${(props: IStyleProps) => props.style || ''}
`
