import { size } from 'polished'
import styled, { keyframes } from 'styled-components'

/**
 * DropSquare props.
 */
export type DropSquareProps = {
  at: number
  duration: number
}

const show = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`

const drop = keyframes`
  from {
    transform: translateY(calc(100vh / -2)) rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg) translateY(0);
  }
`

const scale = keyframes`
  from {
    ${size('5vw')};
  }
  to {
    ${size('30vw')};
  }
`

export const DropSquare = styled.div<DropSquareProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  ${size('5vw')}

  animation: ${show} 1ms ${({ at }) => at}ms both,
    ${drop} ${({ duration }) => duration / 2}ms cubic-bezier(0.13, 0.7, 0.2, 1)
      ${({ at }) => at}ms both,
    ${scale} ${({ duration }) => duration}ms cubic-bezier(0.13, 0.7, 0.2, 1)
      ${({ at, duration }) => at + duration / 2}ms forwards;
`
