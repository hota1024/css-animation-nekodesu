import styled, { keyframes } from 'styled-components'

/**
 * FadeOutProps type.
 */
export type FadeOutProps = {
  inline?: boolean
  at: number
  duration: number
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const FadeOut = styled.div<FadeOutProps>`
  ${({ inline }) => inline && 'display: inline;'}
  animation: ${fadeOut} ${({ duration }) => duration}ms ease ${({ at }) => at}ms
    both;
`
