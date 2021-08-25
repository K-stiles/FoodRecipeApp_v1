import {  DefaultTheme,DarkTheme } from "@react-navigation/native";

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:"#fff",
    primary: "green",
    secondary:"#ddd",
    text: "#222",
    lightgrey: "#333",
  },
};
const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background:"#111",
    primary: "green",
    secondary:"#222",
    text: "#aaa",
    lightgrey: "#eee",
  },
};

export {customDefaultTheme,customDarkTheme}