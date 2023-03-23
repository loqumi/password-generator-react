import style from "./style.module.scss";
import React from "react";

type TProps = {
    onChange: (value: boolean) => void,
    title: string,
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
export const Checkbox = ({onChange, checked, title} : TProps) => {
    const handleChange = (e : React.ChangeEvent <HTMLInputElement>) => {
        onChange(e.target.checked)
    }
    return (
        <div className={style.checkbox}>
            <label className={style.customCheckbox}>
                <input type="checkbox" name="color-1" checked={checked} onChange={handleChange}/>
                    <span>{title}</span>
            </label>
        </div>
    );
};