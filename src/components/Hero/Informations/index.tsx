import {Link} from '../../Link'
import * as S from './style'

export const Informations = () => {
    return (
        <S.Informations>
            <h1>
                Nice to meet you! I'm <span>Pablo Viana</span>.
            </h1>
            <p>
                Based in Brazil, I'm a highly motivated and experienced
                front-end developer with a passion for creating user-friendly
                and engaging web experiences.
            </p>
            <Link href='https://www.linkedin.com/in/pablo-viana-santos/' target="_blank" rel='noreferrer noopener'>Contact me</Link> 
        </S.Informations>
    );
}