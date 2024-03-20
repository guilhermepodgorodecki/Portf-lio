import { styled } from "styled-components";

export const Header = styled("header")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;

    span {
        font-size: 32px;
        font-family: "Space Grotesk";
        font-weight: 700;
        letter-spacing: -0.444px;

        &:hover {
            color: ${({ theme }) => theme.link};
            cursor: pointer;
        }
    }
    a {
        color: ${({ theme }) => theme.accent};
        &:hover {
            color: ${({ theme }) => theme.link};
            cursor: pointer;
        }
    }
    ul {
        display: flex;

        gap: 10px;
    }
    svg {
        font-size: 35px;
    }

    button {
        background: #fff;
        border: none;
        padding: 10px;
        font-family: "Space Grotesk";
        font-size: 20px;
        border-radius: 10px;
    }
    select {
        border: none;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        background-color: ${({ theme }) => theme.secondaryBackground};
        color: ${({ theme }) => theme.accent};
        font-size: 20px;
        &:focus {
            outline: none;
        }

    }

    @media (width <= 430px) {
        flex-direction: column;
        gap: 20px;
        ul {
            justify-content: center;
            align-items: center;
            padding: 0;
        }
    }
`;