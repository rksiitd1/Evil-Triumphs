import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Content />
      <Footer />
    </main>
  )
}

