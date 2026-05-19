import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Esther Moriarty — Product Designer',
  description:
    'Product Designer based in Berlin. 5+ years designing for growth and retention. +10% CVR uplift. 0→1 launches. 20+ experiments.',
  openGraph: {
    title: 'Esther Moriarty — Product Designer',
    description: 'Product Designer based in Berlin. Designing for growth. Shipping what matters.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#fcfbf4] text-[#2b5ce6]">{children}</body>
    </html>
  )
}
