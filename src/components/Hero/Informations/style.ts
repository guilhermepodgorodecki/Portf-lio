import styled from 'styled-components'

export const Informations = styled("section")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;

    h1 {
        font-family: "Space Grotesk";
        font-size: 88px;
        font-style: normal;
        font-weight: 700;
        line-height: 88px;
        letter-spacing: -2.5px;
        margin-bottom: 45px;
    }
    span {
        color: ${({ theme }) => theme.accent};
        &:hover {
            color: ${({ theme }) => theme.link};
            border-bottom: 6px solid ${({ theme }) => theme.link};
            cursor: pointer;
        }
    }

    p {
        color: ${({ theme }) => theme.accent};
        font-family: "Space Grotesk";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 155.556% */
        max-width: 440px;
        margin-bottom: 65px;
    }

    a {
        font-family: "Space Grotesk";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 162.5% */
        letter-spacing: 2.286px;

        text-transform: uppercase;
        color: ${({ theme }) => theme.accent};
        &:hover {
            color: ${({ theme }) => theme.link};
            border-bottom: 2px solid ${({ theme }) => theme.link};
        }
    }
    @media (max-width: 768px) {
        width: 70%;
        h1 {
            font-size: 70px;
        }
        p {
            font-size: 23px;
        }
        align-items: center;
    }
    @media (max-width: 430px) {
        h1 {
            font-size: 35px;
            line-height: 40px;
            text-align: center;
        }
        p {
            text-align: center;
        }
    }
`;

