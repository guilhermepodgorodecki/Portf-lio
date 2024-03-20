import { data } from '../../utils/projectList.ts'
import { Image } from '../Image'
import { Link } from '../Link'
import * as S from './style'


export const ProjectList = () => {

    return (
        <S.ProjectList>
            <h2>Projects</h2>
            <ul className="projects">
                {data.map((project) => {
                    return (
                        <li key={project.name} className="project">
                            <div className="project-image">
                                <Image src={project.image} alt={project.name} />
                                <div className="project-links">
                                    <Link href={project.deploy} aria-label="Project deploy link" title="Project deploy link" target="_blank"rel="noreferrer noopener">
                                        Project
                                    </Link>
                                    <Link href={project.repository} aria-label="Link to the repository on Github" title="Link to the repository on Github" target="_blank" rel="noreferrer noopener">
                                        Code
                                    </Link>
                                </div>
                            </div>
                            <span>{project.name}</span>
                            <ul className="languages">
                                {project.languages.map((language) => {
                                    return <li key={language}>{language}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </S.ProjectList>
    );
}