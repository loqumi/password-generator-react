import style from "./style.module.scss";

export const Header = ({ children }) => (
    <header className={style.header}>{children}</header>
);