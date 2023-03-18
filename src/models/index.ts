import {sample} from "effector";
import {changePassword, generatePassword} from "./events";

sample({
    clock: generatePassword,
    fn: () => {
        const passwordLength = 12;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password
    },
    target : changePassword,
})