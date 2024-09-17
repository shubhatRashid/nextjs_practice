import '../styles.css'

export const metadata = {
  title: 'Carousel',
  description: 'Developed by Shubhat Rashid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center'>{children}</body>
    </html>
  )
}
