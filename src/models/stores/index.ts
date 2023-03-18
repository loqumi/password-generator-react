import {createStore, Store} from "effector";
import {changePassword} from "../events";

export const $password: Store<string> = createStore("").on(changePassword, (_, value) => value)