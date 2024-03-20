import { ImgHTMLAttributes } from "react"


export const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <img {...props}></img>
    )
}