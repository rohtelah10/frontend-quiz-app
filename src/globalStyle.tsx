import { createGlobalStyle } from "styled-components";
import Rubik from "./assets/fonts/Rubik-VariableFont_wght.ttf";
import RubikItalic from "./assets/fonts/Rubik-Italic-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
    }

    @font-face {
        font-family: 'Rubik';
        src: url("${Rubik}") format('truetype');
    }

    @font-face {
        font-family: 'Rubik-Italic';
        src: url('${RubikItalic}') format('truetype');
    }
`;

export default GlobalStyle;