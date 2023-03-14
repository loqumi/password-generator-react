import { intl } from "./utils";
import { INTL } from "./constants/intl";
import { Main } from "./layouts/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main>
            {intl(INTL.DESCRIPTION.MAIN)}
        </Main>
      </header>
    </div>
  );
}

export default App;
