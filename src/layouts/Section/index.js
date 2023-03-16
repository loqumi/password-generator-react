import style from "./style.module.scss";

export const Section = ({ children, id }) => (
    <section id={id} className={style.section}>
        {children}
    </section>
);