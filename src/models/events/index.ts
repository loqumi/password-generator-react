import {createEvent} from "effector";

export const changePassword = createEvent<string>()
export const changePasswordLength = createEvent<number>()
export const toggleNumeric = createEvent<boolean>()
export const toggleLowercase = createEvent<boolean>()
export const toggleUppercase = createEvent<boolean>()
export const toggleSymbols = createEvent<boolean>()
export const generatePassword = createEvent()