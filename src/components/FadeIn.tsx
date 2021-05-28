import styled, { keyframes } from 'styled-components'

/**
 * FadeInProps type.
 */
export type FadeInProps = {
  inline?: boolean
  at: number
  duration: number
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeIn = styled.div<FadeInProps>`
  ${({ inline }) => inline && 'display: inline;'}
  animation: ${fadeIn} ${({ duration }) => duration}ms ease ${({ at }) => at}ms
    both;
`
