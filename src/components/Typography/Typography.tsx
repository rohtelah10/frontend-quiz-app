import type { JSX } from "react";
import styled, { type DefaultTheme } from "styled-components";
import type { CSS } from "styled-components/dist/types";

interface TextProps {
    children: React.ReactNode;
    $color?: keyof DefaultTheme["colors"];
    as?: keyof JSX.IntrinsicElements;
    $textAlign?: CSS.Properties["textAlign"];
    $hoverColor?: keyof DefaultTheme["colors"];
}

export const TextPreset1 = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 144px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};

    @media (max-width: 600px) {
        font-size: 88px;
    }
`;

export const TextPreset2Medium = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 64px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};


    @media (max-width: 600px) {
        font-size: 40px;
    }
`;

export const TextPreset2Light = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 64px;
    font-weight: 300;
    line-height: 100%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};

    @media (max-width: 650px) {
        font-size: 40px;
    }
`;
export const TextPreset3 = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 36px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};

      
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const TextPreset4 = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 28px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: ${({$textAlign}) => $textAlign ? $textAlign : "center"};
    color: ${({theme}) => theme.colors.text};

      
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
export const TextPreset5Medium = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};
`;

export const TextPreset5MobileItalic = styled.p<TextProps>`
    font-family: 'Rubik-Italic';
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};
`;
export const TextPreset5Regular = styled.p<TextProps>`
    font-family: 'Rubik';
    font-size: 24px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};
`;
export const TextPreset6 = styled.p<TextProps>`
    font-family: 'Rubik-Italic';
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0px;

    color: ${({theme}) => theme.colors.text};
`;