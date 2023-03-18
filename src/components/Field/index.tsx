import style from "./style.module.scss";
import React from "react";
type TProps = {
    value: string,
    onChange: (value:string) => void
}
export const Field = ({onChange, value} : TProps) => {
    const handleChange = (e : React.ChangeEvent <HTMLInputElement>) => {
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