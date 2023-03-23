import {createStore} from "effector";
import {changePassword, toggleLowercase, toggleNumeric, toggleSymbols, toggleUppercase} from "../events";
import {changePasswordLength} from "../events";

export const $password = createStore("").on(changePassword, (_, value) => value)
export const $passwordLength = createStore(32).on(changePasswordLength, (_, value) => value)
export const $numericInPassword = createStore(true).on(toggleNumeric, (_, value)=> value)
export const $lowercaseInPassword = createStore(true).on(toggleLowercase, (_, value)=> value)
export const $uppercaseInPassword = createStore(true).on(toggleUppercase, (_, value)=> value)
export const $symbolsInPassword = createStore(true).on(toggleSymbols, (_, value)=> value)