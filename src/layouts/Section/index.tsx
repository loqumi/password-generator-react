import style from "./style.module.scss";
import {ReactNode} from "react";

type TProps = {
    children: ReactNode,
    id: string
}
export const Section = ({ children, id }: TProps) => (
    <section id={id} className={style.section}>
        {children}
    </section>
);