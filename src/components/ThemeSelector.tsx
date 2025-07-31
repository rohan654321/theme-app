"use client"

import { ChevronDown } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { setTheme, type ThemeType } from "../store/themeSlice"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import "./ThemeSelector.css"

const themes = [
  { value: "theme1" as ThemeType, label: "Minimalist" },
  { value: "theme2" as ThemeType, label: "Dark Sidebar" },
  { value: "theme3" as ThemeType, label: "Colorful Cards" },
]

export function ThemeSelector() {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  const currentThemeLabel = themes.find((t) => t.value === currentTheme)?.label

  const handleThemeChange = (theme: ThemeType) => {
    dispatch(setTheme(theme))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="theme-selector-trigger">
        {currentThemeLabel}
        <ChevronDown className="dropdown-arrow" size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="theme-selector-content">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className={`theme-selector-item ${currentTheme === theme.value ? "active" : ""}`}
          >
            {theme.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
