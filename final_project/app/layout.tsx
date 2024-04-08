import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from './components/Navbar';
import './globals.css'
import FirebaseSignIn from './FirebaseSignIn.client'; // Make sure this is the correct path
import Footer from './components/footer';


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <FirebaseSignIn />
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer></Footer></body>
 
      </html>
    </ClerkProvider>
  )
}
