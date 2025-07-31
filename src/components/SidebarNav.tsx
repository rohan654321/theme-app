"use client"

import { useAppSelector } from "../hooks/redux-hooks"
import "./SidebarNav.css"

const sections = [
  { id: "hero", label: "Hero Section" },
  { id: "features", label: "Features" },
  { id: "products", label: "Products" },
]

export function SidebarNav() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (currentTheme !== "theme2") return null

  return (
    <aside className="sidebar-nav">
      <h3 className="sidebar-nav-title">Navigation</h3>
      <nav className="sidebar-nav-menu">
        {sections.map((section) => (
          <button key={section.id} onClick={() => scrollToSection(section.id)} className="sidebar-nav-link">
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
