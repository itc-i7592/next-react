import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Home () {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アップしていくサイト' imageOn />
      <meta name='description' content='アウトプットしていくサイト' />
      <meta property='og:description' content='アウトプットしていくサイト' />
    </Container>
  )
}
