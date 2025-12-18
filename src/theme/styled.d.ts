import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // palette: string,
    colors: {
      background: string;
      option: string;
      "button-active": string;
      "button-hover": string;
      text: string;
      "progress-total": string;
      "progress-bar": string;
      "ques-right": string;
      "ques-wrong": string;
      "ques-hover": string;
      "drop-shadow": string;
    };
  }
}
