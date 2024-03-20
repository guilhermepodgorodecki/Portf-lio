import { useContext } from "react";
import { FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import * as S from './style'
import { ThemeContext } from "src/context";
import { Link } from "../Link";

export const Header = () => {
    const { handleThemeChange } = useContext(ThemeContext);
    return (
        <S.Header>
            <span>Pablito</span>
            <nav>
                <ul>
                    <li>
                        <Link
                            href="https://github.com/pablovianas/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Github Profile Link"
                            title="Github Profile Link"
                        >
                            <FaSquareGithub />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/pablo-viana-santos/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Linkedin Profile Link"
                            title="Linkedin Profile Link"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </li>
                </ul>
            </nav>
            <select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    handleThemeChange(event.target.value)
                }
                title="Select a color"
            >
                <option value="" disabled defaultValue={"default"}>
                    Pick a color{" "}
                </option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </S.Header>
    );
}