import { Html, Head, Main, NextScript } from 'next/document'
import { siteMeta } from 'lib/constants'
const { siteLage } = siteMeta
export default function Document() {
  return (
    <Html lang={siteLage}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
