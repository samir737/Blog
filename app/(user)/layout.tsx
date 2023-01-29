import React from "react"
import '../../styles/globals.css'
import Footer from "./../components/Footer"
import Navbar from "./../components/Navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className=" w-full min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto p-6 xl:p-0 w-full">
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  )
}
