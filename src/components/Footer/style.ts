import styled from "styled-components";

export const Footer = styled('footer')`
    display: flex;
    padding: 30px;
    justify-content: center;
    p{
        font-size: 30px;
    } 
    @media(max-width: 425px){
        p{
            font-size: 20px;
        }
    }
`