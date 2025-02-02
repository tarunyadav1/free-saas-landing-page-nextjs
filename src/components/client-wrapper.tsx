'use client'

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  )
}
