import style from "./style.module.scss";

export const Field = ({onChange, value}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <input className={style.input}
               placeholder={"Click GENERATE to generate random symbols string"}
               onChange={handleChange}
               value={value}
               disabled
               id={"field"}
        />
    );
};