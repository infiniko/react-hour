import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  abyss: "abyss",
  garden: "garden",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.garden;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "infiniko" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action);
    },
    logoutUser: (state) => {
      console.log("dada");
    },
    toggleTheme: (state) => {
      const { garden, abyss } = themes;
      state.theme = state.theme === garden ? abyss : garden;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
