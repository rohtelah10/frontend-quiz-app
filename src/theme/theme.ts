import { palette } from "./pallete";

export const lightTheme = {
  palette: palette,
  colors: {
      background: palette["grey-50"],
      option: palette["white"],
      "button-active": palette["purple-600"],
      "button-hover": palette["purple-600"],
      text: palette["blue-900"],
      "progress-total": palette["white"],
      "progress-bar": palette["purple-600"],
      "ques-right": palette["green-500"],
      "ques-wrong": palette["red-500"],
      "ques-hover": palette["purple-600"],
      "drop-shadow": "0 16px 40px rgba(143, 160, 193, 0.14)",
    },
};

export const darkTheme = {
  palette: palette,
  colors: {
    background: palette["blue-900"],
    option: palette["blue-850"],
    "button-active": palette["purple-600"],
    "button-hover": palette["purple-100"],
    text: palette["white"],
    "progress-total": palette["blue-850"],
    "progress-bar": palette["purple-600"],
    "ques-right": palette["green-500"],
    "ques-wrong": palette["red-500"],
    "ques-hover": palette["purple-600"],
    "drop-shadow": "0 16px 40px rgba(49, 62, 81, 0.14)",
  },
};
