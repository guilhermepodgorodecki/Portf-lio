
import { Informations } from "./Informations";
import { Image } from "../Image";
import * as S from "./style";
import profilePicture from "../../assets/profile-pic.jpg";

export const Hero = () => {
    return (
        <S.Hero>
            <Informations />
            <Image src={profilePicture} alt="Picture of me smiling"/>
        </S.Hero>
    );
}