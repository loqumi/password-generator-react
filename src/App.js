import {intl} from "./utils";
import {INTL} from "./constants/intl";
import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
import {Section} from "./layouts/Section";
import "./styles/reset.scss";
import style from "./styles/style.module.scss";
import {Button} from "./components/Button";
import {Footer} from "./layouts/Footer";

function App() {
  return (
    <div className="App">
        <Header>
            <h1 className={style.title}>{intl(INTL.TITLE.MAIN)}</h1>
        </Header>
        <Main>
            <Section id="main">

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
const GenerateButton = () => <Button title={intl(INTL.BUTTON.GENERATE)} />;
const CopyButton = () => <Button title={intl(INTL.BUTTON.COPY)} />;

export default App;
