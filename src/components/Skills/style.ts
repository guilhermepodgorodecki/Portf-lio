import styled from 'styled-components'


export const Skills = styled("section")`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-height: 100vh;
    justify-content: center;
    text-align: center;
    h2 {
        font-family: Space Grotesk;
        font-size: 70px;
        margin-bottom: 20px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 20px;
    }
    li {
        font-family: "Space Grotesk";
        font-size: 48px;
        letter-spacing: -1.5px;
        border: 3px solid transparent;
        padding: 10px;
        border-radius: 10px;
    }
    li:hover{
        border: 3px solid ${({ theme }) => theme.accent};
        cursor: pointer;
    }
    @media (max-width: 768px) {
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 425px) {
        margin: 30px;
        align-items: center;
        h2 {
            font-size: 60px;
        }
        ul {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            gap: 20px;
        }
        li {
            font-size: 30px;
        }
    }
`;