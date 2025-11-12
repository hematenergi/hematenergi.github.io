import './styles/globals.css'

export const metadata = {
  title: 'Dany Arkham',
  description: 'Front-End & Mobile Engineer'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
