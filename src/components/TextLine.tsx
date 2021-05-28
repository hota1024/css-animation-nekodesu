import styled, { keyframes } from 'styled-components'
import { Text, TextProps } from './Text'

/**
 * TextLineProps type.
 */
export type TextLineProps = TextProps & {
  at: number
  duration: number
  lineColor?: string
}

const textIn = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`

const lineIn = keyframes`
  from {
    right: 100%;
  }
  to {
    right: 0;
  }
`

const lineOut = keyframes`
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
`

export const TextLine = styled(Text)<TextLineProps>`
  position: relative;
  animation: ${textIn} 1ms ${({ at, duration }) => at + duration / 2}ms both;

  &:after {
    position: absolute;
    ${({ lineColor }) => lineColor && `background: ${lineColor};`}
    content: '';
    visibility: visible;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    animation: ${lineIn} ${({ duration }) => duration / 2}ms
        cubic-bezier(0.13, 0.7, 0.2, 1) ${({ at }) => at}ms both,
      ${lineOut} ${({ duration }) => duration / 2}ms
        cubic-bezier(0.13, 0.7, 0.2, 1)
        ${({ at, duration }) => at + duration / 2}ms both;
  }
`
