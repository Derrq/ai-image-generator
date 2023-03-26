import ClientProvider from '@/components/ClientProvider';
import Header from '@/components/Header';
import PromptInput from '@/components/PromptInput';
import '../styles/globals.css';

export const metadata = {
  title: 'Derrq AI Art Generator',
  description: 'Created by Derrq',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* Header */}
          <Header />

          {/* Prompt Input */}
          <PromptInput />

          {children}
        </ClientProvider>

        </body>
    </html>
  )
}
