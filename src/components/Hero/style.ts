import { styled } from 'styled-components'

export const Hero = styled("section")`
    display: flex;
    padding: 30px;
    gap: 30px;
    min-height: calc(100vh - 90px);
    align-items: center;
    img {
        margin: 0 auto;
        max-width: 320px;
        filter: grayscale(0.8);
        border-radius: 30%;
        align-self: center;
        transition: 0.5s ease-in;
    }
    @media (max-width: 768px) {
        margin-top: 10px;
        img {
            width: 45%;
        }
    }
    @media (max-width: 430px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding: 15px;
        min-height: initial;
        img {
            width: 50%;
        }
    }
`;
