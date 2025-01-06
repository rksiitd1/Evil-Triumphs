import './globals.css'
import { Inter, Crimson_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const crimsonPro = Crimson_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Evil Triumphs Over Good',
  description: 'A visually stunning exploration of the eternal struggle between good and evil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}

