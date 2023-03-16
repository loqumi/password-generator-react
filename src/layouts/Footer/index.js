import style from "./style.module.scss";

export const Footer = ({ children }) => (
    <footer className={style.footer}>{children}</footer>
);