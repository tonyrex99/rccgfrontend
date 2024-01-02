"use client";
import { createGlobalStyle } from "styled-components";

interface Theme {
  PrimaryColor?: string;
  SecondaryColor?: string;
}

interface GlobalStylesProps {
  theme: Theme;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  :root {
    --primary-color: ${(props) => props.theme.PrimaryColor || "red"};
    --secondary-color: ${(props) => props.theme.SecondaryColor || "blue"};
  }
`;

export default GlobalStyles;
