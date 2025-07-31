"use client"

import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks"
import { loadTheme } from "./store/themeSlice"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { ThankYou } from "./pages/ThankYou"
import { Toaster } from "./components/ui/toaster"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    dispatch(loadTheme())
  }, [dispatch])

  useEffect(() => {
    document.body.className = `theme-${currentTheme}`
    document.documentElement.className = `theme-${currentTheme}`
  }, [currentTheme])

  return (
    <div className={`app theme-${currentTheme}`}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>
      <Toaster />
    </div>
  )
}

export default App
