import * as S from './style'

export const Skills = () => {
    const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NodeJS', 'Express', 'MySQL']
    return (
        <S.Skills>
            <h2>Skills</h2>
            <ul>
                {
                    skills.map(skill => <li key={skill}>{skill}</li>)
                }
            </ul>
        </S.Skills>
    )
}