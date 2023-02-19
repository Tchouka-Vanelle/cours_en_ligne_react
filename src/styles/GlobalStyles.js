//c'est un composant qui ne peut pas avoir d'enfant et qui permet de donner du style a d'autres composants
import { themes } from './ColorStyles';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.backgroundColor};
        }
    }
`;