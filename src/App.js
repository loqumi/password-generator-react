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
import {changePassword, generatePassword} from "./models/events";
import {$password} from "./models/stores";

function App() {

  return (
    <div className="App">
        <Header>
            <h1 className={style.title}>{intl(INTL.TITLE.MAIN)}</h1>
        </Header>
        <Main>
            <Section id="main">
                <PasswordField />
                <GenerateButton />
                <CopyButton />
            </Section>
        </Main>
        <Footer>
            <h3 className={style.description}>&#169;{intl(INTL.DESCRIPTION.AUTHOR)} {currentYear}</h3>
        </Footer>
    </div>
  );
}
const currentYear = new Date().getFullYear();

const PasswordField = () => {
    const value = useStore($password)
    const onChange = useEvent(changePassword)
    const handleChange = (value) => onChange(value)
    return <Field onChange={handleChange} value={value}/>
}

const GenerateButton = () => {
    const onClick = useEvent(generatePassword)
    const handleClick = () => onClick()
    return <Button title={intl(INTL.BUTTON.GENERATE)} onClick={handleClick} />
};
const CopyButton = () => <Button title={intl(INTL.BUTTON.COPY)} />;

export default App;
