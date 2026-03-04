import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Butts Games',
  description: 'Web games hub and launcher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
