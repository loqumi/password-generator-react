import style from "./style.module.scss";
type TProps = {
    title: string,
    onClick: () => void
}
export const Button = ({ title, onClick } : TProps) => {
    return (
        <button className={style.button} onClick={onClick}>
            {title}
        </button>
    );
};