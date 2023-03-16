import style from "./style.module.scss";

export const Field = ({onChange, value}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <input className={style.input} onChange={handleChange} value={value} disabled/>
    );
};