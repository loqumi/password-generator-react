import style from "./style.module.scss";

export const Main = ({ children }) => (
    <main className={style.main}>{children}</main>
);