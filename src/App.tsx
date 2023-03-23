import {intl} from "./utils";
import {INTL} from "./constants/intl";
import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
import {Section} from "./layouts/Section";
import "./styles/reset.scss";
import "./models"
import style from "./styles/style.module.scss";
import {Button} from "./components/Button";
import {Footer} from "./layouts/Footer";
import {Field} from "./components/Field";
import {useEvent, useStore} from "effector-react";
import {
    changePassword,
    changePasswordLength,
    generatePassword,
    toggleLowercase,
    toggleNumeric, toggleSymbols,
    toggleUppercase
} from "./models/events";
import {
    $lowercaseInPassword,
    $numericInPassword,
    $password,
    $passwordLength,
    $symbolsInPassword,
    $uppercaseInPassword
} from "./models/stores";
import {Input} from "./components/Input";
import {Checkbox} from "./components/Checkbox";

function App() {

  return (
    <div className="App">
        <Header>
            <h1 className={style.title}>{intl(INTL.TITLE.MAIN)}</h1>
        </Header>
        <Main>
            <article className={style.article}>
                <Section id="main">
                    <PasswordField />
                    <GenerateButton />
                    <CopyButton />
                </Section>
                <Section id="form">
                    <PasswordLength />
                    <div className={style.container}>
                        <ToggleNumeric />
                        <ToggleLowercase />
                        <ToggleUppercase />
                        <ToggleSymbols />
                    </div>
                </Section>
            </article>
        </Main>
        <Footer>
            <h3 className={style.description}>&#169;{intl(INTL.DESCRIPTION.AUTHOR)} {currentYear}</h3>
        </Footer>
    </div>
  );
}

const currentYear = new Date().getFullYear();
const CopyButton = () => {
    const value = useStore($password)
    const handleClick = () => {
        navigator.clipboard.writeText(value)
    }
    return <Button title={intl(INTL.BUTTON.COPY)} onClick={handleClick}/>
};
const ToggleNumeric = () => {
    const value = useStore($numericInPassword)
    const onChange = useEvent(toggleNumeric)
    const handleChange = (value:boolean) => onChange(value)
    return <Checkbox onChange={handleChange} checked={value} title={intl(INTL.TOGGLE.NUMERIC)}/>
}
const ToggleLowercase = () => {
    const value = useStore($lowercaseInPassword)
    const onChange = useEvent(toggleLowercase)
    const handleChange = (value:boolean) => onChange(value)
    return <Checkbox onChange={handleChange} checked={value} title={intl(INTL.TOGGLE.LOWER)}/>
}
const ToggleUppercase = () => {
    const value = useStore($uppercaseInPassword)
    const onChange = useEvent(toggleUppercase)
    const handleChange = (value:boolean) => onChange(value)
    return <Checkbox onChange={handleChange} checked={value} title={intl(INTL.TOGGLE.UPPER)}/>
}
const ToggleSymbols = () => {
    const value = useStore($symbolsInPassword)
    const onChange = useEvent(toggleSymbols)
    const handleChange = (value:boolean) => onChange(value)
    return <Checkbox onChange={handleChange} checked={value} title={intl(INTL.TOGGLE.SYMBOLS)}/>
}
const GenerateButton = () => {
    const onClick = useEvent(generatePassword)
    const handleClick = () => onClick()
    return <Button title={intl(INTL.BUTTON.GENERATE)} onClick={handleClick} />
};
const PasswordField = () => {
    const value = useStore($password)
    const onChange = useEvent(changePassword)
    const handleChange = (value : string) => onChange(value)
    const handleClick = () => {
        navigator.clipboard.writeText(value)
    }
    return <Field onChange={handleChange} onClick={handleClick} value={value} />
}
const PasswordLength = () => {
    const value = useStore($passwordLength)
    const onChange = useEvent(changePasswordLength)
    const handleChange = (value:string) => onChange(Number(value))
    return <Input value={value} onChange={handleChange} />
}
export default App;
