import style from "./style.module.scss";
import React from "react";
import {$passwordLength} from "../../models/stores";
import {useStore} from "effector-react";
type TProps = {
    onChange: (value: string) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
export const Input = ({onChange, ...props} : TProps) => {
    const handleChange = (e : React.ChangeEvent <HTMLInputElement>) => {
        onChange(e.target.value)
    }
    const value = useStore($passwordLength)
    return (
        <div className={style.group}>
            <input className={style.input}
                   type="range"
                   min="8"
                   max="64"
                   onChange={handleChange}
                   {...props}
                   id={"input"}
            />
            <input className={style.number}
                   value={value}
                   readOnly
                   id={"field"}/>
        </div>
    );
};