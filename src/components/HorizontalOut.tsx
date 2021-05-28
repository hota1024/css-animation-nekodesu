import styled, { keyframes } from 'styled-components'

/**
 * HorizontalOut props.
 */
export type HorizontalOutProps = {
  at: number
  duration: number
}

const out = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`

export const HorizontalOut = styled.div<HorizontalOutProps>`
  width: 100%;
  height: 100%;
  animation: ${out} ${({ duration }) => duration}ms
    cubic-bezier(0.13, 0.7, 0.2, 1) ${({ at }) => at}ms both;
`
