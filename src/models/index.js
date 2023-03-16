import {sample} from "effector";
import {changePassword, generatePassword} from "./events";

sample({
    clock: generatePassword,
    fn: () => Math.random().toString(36).substring(2, 8),
    target : changePassword,
})