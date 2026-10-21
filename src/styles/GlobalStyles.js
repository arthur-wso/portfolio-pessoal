import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'JetBrains Mono', monospace;
        }
        
        body {
            min-height: 100vh;
            background: #061625;
            color: #ffffffbe;
            text-shadow: 0 0 10px rgba(224, 227, 227, 0.9);
        }
`;
