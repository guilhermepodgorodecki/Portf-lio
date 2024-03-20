import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ::root{
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        background-color: ${({ theme }) => theme.primaryBackground};     
    }
    
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
   

    body {
        min-width: 320px;
        max-width: 1200px;
        margin: 0 auto;
        min-height: 100vh;
        color: ${({ theme }) => theme.accent};
        background-color: ${({ theme }) => theme.primaryBackground};
    }


    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.accent};
    }

    @media (max-width: 768px) {
        body{
            max-width: 700px;
        }
    }
`;
