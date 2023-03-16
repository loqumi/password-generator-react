import style from "./style.module.scss";

export const Button = ({ title, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>
            {title}
        </button>
    );
};