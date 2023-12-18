import { Alert } from "@axa-fr/react-toolkit-all";

import "@axa-fr/react-toolkit-alert/dist/af-alert.css";

function App() {
  return (
    <>
      <Alert
        classModifier="success"
        icon="glyphicon glyphicon-ok"
        title="Vous êtes sur le troisième frontend"
      />
      <p>Remote</p>
    </>
  );
}

export default App;
