import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type ThemeType = "theme1" | "theme2" | "theme3"

interface ThemeState {
  currentTheme: ThemeType
}

const initialState: ThemeState = {
  currentTheme: "theme1",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedTheme", action.payload)
      }
    },
    loadTheme: (state) => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("selectedTheme") as ThemeType | null
        if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
          state.currentTheme = savedTheme
        }
      }
    },
  },
})

export const { setTheme, loadTheme } = themeSlice.actions
export default themeSlice.reducer
