import style from "./style.module.scss";
import {ReactNode} from "react";

type TProps = {
    children: ReactNode
}
export const Footer = ({ children }: TProps) => (
    <footer className={style.footer}>{children}</footer>
);