import style from "./style.module.scss";
import React from "react";
type TProps = {
    value: string,
    onChange: (value:string) => void
    onClick: () => void
}
export const Field = ({onChange, value, onClick} : TProps) => {
    const handleChange = (e : React.ChangeEvent <HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <input className={style.field}
               placeholder={"Click GENERATE to generate random symbols string"}
               onChange={handleChange}
               onClick={onClick}
               value={value}
               readOnly
               id={"field"}
        />
    );
};