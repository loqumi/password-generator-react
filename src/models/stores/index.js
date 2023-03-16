import {createStore} from "effector";
import {changePassword} from "../events";

export const $password = createStore("").on(changePassword, (_, value) => value)