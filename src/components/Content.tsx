import styled from 'styled-components'

/**
 * ContentProps type.
 */
export type ContentProps = {
  maxWidth?: string
}

export const Content = styled.div<ContentProps>`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  width: 100%;
`
