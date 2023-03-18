import style from "./style.module.scss";

import {ReactNode} from "react";

type TProps = {
    children: ReactNode
}
export const Header = ({ children } : TProps) => (
    <header className={style.header}>{children}</header>
);