import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Content } from '../components/Content'
import { DropSquare } from '../components/DropSquare'
import { FadeIn } from '../components/FadeIn'
import { FadeOut } from '../components/FadeOut'
import { HorizontalOut } from '../components/HorizontalOut'
import { Text } from '../components/Text'
import { TextLine } from '../components/TextLine'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home - css-animation-loading</title>
      </Head>

      <div className="container">
        <Content maxWidth={`${8 * 64}px`}>
          <FadeOut at={2000} duration={1000}>
            <TextLine
              at={1000}
              duration={600}
              color="white"
              lineColor="white"
              fontSize="64px"
              fontWeight="bold"
            >
              ねこです
            </TextLine>
            <TextLine
              at={1100}
              duration={600}
              color="white"
              lineColor="white"
              align="center"
              fontSize="64px"
              fontWeight="bold"
            >
              よろしくおねがい
            </TextLine>
            <TextLine
              at={1200}
              duration={600}
              color="white"
              lineColor="white"
              align="right"
              fontSize="64px"
              fontWeight="bold"
            >
              します
            </TextLine>
          </FadeOut>
        </Content>

        <DropSquare at={1900} duration={1000}>
          <HorizontalOut at={7000} duration={500}>
            <Container
              background="white"
              align="center"
              justify="center"
              fillHeight
            >
              <Content maxWidth="400px">
                <Text
                  align="center"
                  fontSize="1.35"
                  color="black"
                  fontWeight="bold"
                >
                  <FadeIn at={3000} duration={500} inline>
                    アイテム番号:
                  </FadeIn>{' '}
                  <FadeIn at={3500} duration={500} inline>
                    SCP-040-JP
                  </FadeIn>
                </Text>
                <TextLine
                  at={4200}
                  duration={1000}
                  color="black"
                  lineColor="black"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  align="center"
                >
                  ねこですよろしくおねがいします
                </TextLine>
                <Text
                  align="center"
                  fontSize="1.35"
                  color="black"
                  fontWeight="bold"
                >
                  <FadeIn at={5200} duration={500} inline>
                    オブジェクトクラス:
                  </FadeIn>{' '}
                  <FadeIn at={5800} duration={500} inline>
                    Safe
                  </FadeIn>
                </Text>
              </Content>
            </Container>
          </HorizontalOut>
        </DropSquare>
      </div>

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: black;
        }

        .container {
          width: 100%;
          height: 100vh;

          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }

        .align-left {
          text-align: left;
        }

        .align-center {
          text-align: center;
        }

        .align-right {
          text-align: right;
        }
      `}</style>
    </>
  )
}

export default HomePage
