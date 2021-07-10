import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.secondaryDark};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
            Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", 
            "Segoe UI Emoji", "Segoe UI Symbol";
        text-rendering: optimizeLegibility;

        h1 {
            font-family: "Dosis";
            font-size: 48px;
            line-height: 60px;
        }

        h2 {
            font-family: "Dosis";
            font-size: 32px;
            line-height: 46px;
        }

        h3 {
            font-family: "Dosis";
            font-size: 24px;
            line-height: 34px;
        }

        h4 {
            font-family: "Lato";
            font-size: 28px;
            line-height: 34px;
            font-weight: bold;
        }

        div {
            font-family: "Lato";
            font-size: 16px;
            line-height: 26px;
        }
    }
`