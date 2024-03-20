import styled from "styled-components";


export const ProjectList = styled("section")`
    display: flex;
    flex-direction: column;
    padding: 30px;
    min-height: 100vh;
    h2 {
        font-family: Space Grotesk;
        font-size: 70px;
        margin-bottom: 20px;
    }
    .projects {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 30px;
    }
    .project {
        border-bottom: 1px solid ${({ theme }) => theme.accent};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .project-image {
        position: relative;
        margin-bottom: 20px;
    }
    .project-image img {
        width: 100%;
        height: 250px;
        object-fit: contain;
        border-radius: 10px;
    }

    .project-image .project-links {
        display: none;
        text-align: center;
    }
    .project-image:hover > .project-links {
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .project-image:hover img {
        filter: opacity(0.35);
        transition: all 0.5s ease;
    }
    .project-image:hover img::after {
        background: ${({ theme }) => theme.accent};
    }

    .project-links a {
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 900;
        line-height: 26px;
        letter-spacing: 2.286px;
        border-bottom: 2px solid ${({ theme }) => theme.mainText};
        text-transform: uppercase;
        &:hover {
            color: ${({ theme }) => theme.link};
            cursor: pointer;
        }
    }
    span {
        font-family: Space Grotesk;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
    .languages {
        display: flex;
        gap: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .languages li {
        padding: 10px;
        border: 2px solid transparent;
    }
    .languages li:hover {
        border: 2px solid ${({ theme }) => theme.accent};
        border-radius: 10px;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        .projects {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
    }
    @media (max-width: 768px) {
        margin: 30px;
        align-items: center;
        h2 {
            font-size: 60px;
        }
        .projects {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 20px;
        }
        .projects li {
            font-size: 25px;
        }
        /* .project-image:hover > .project-links {
            top: 90px;
            left: 80px;
        } */
        .languages {
            justify-content: center;
        }

        span {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 420px) {
        .project-image {
            margin-bottom: 10px;
        }
    }
`;