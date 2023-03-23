import {sample} from "effector";
import {changePassword, generatePassword} from "./events";
import {
    $lowercaseInPassword,
    $numericInPassword,
    $passwordLength,
    $symbolsInPassword,
    $uppercaseInPassword
} from "./stores";

sample({
    clock: generatePassword,
    source: [$passwordLength, $numericInPassword, $symbolsInPassword, $uppercaseInPassword, $lowercaseInPassword],
    fn: ([passwordLength, numericInPassword, symbolsInPassword,uppercaseInPassword,lowercaseInPassword]) => {
        const numbers = numericInPassword ? "0123456789" : ""
        const lowercase = lowercaseInPassword ? "abcdefghijklmnopqrstuvwxyz" : ""
        const uppercase = uppercaseInPassword ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
        const symbols = symbolsInPassword ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : ""

        const charset = `${lowercase}${uppercase}${numbers}${symbols}`;

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password
    },
    target : changePassword,
})