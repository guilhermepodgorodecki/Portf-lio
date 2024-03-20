import { ReactNode, AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}
export const Link = ({ children, ...rest }: LinkProps) => {
    return <a {...rest}>{children}</a>;
};