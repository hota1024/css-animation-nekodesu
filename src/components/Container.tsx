import styled from 'styled-components'

/**
 * Container type.
 */
export type ContainerProps = {
  background?: string
  align?: string
  justify?: string
  fillHeight?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;

  ${({ background }) => background && `background: ${background};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ fillHeight }) => fillHeight && `height: 100%;`}
`
