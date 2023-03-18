import style from "./style.module.scss";
import {ReactNode} from "react";

type TProps = {
    children: ReactNode
}
export const Main = ({ children }: TProps) => (
    <main className={style.main}>{children}</main>
);