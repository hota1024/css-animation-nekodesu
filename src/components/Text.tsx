import styled from 'styled-components'

export type TextProps = {
  align?: 'center' | 'left' | 'right'
  fontSize?: string
  fontWeight?: string
  color?: string
}

export const Text = styled.div<TextProps>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ align }) => align && `text-align: ${align};`}
`
