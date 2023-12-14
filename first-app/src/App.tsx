import { Link, Route, Routes } from "react-router-dom";
import { Process } from "./pages/Process/Process";
import { Alert } from "@axa-fr/react-toolkit-all";

import "@axa-fr/react-toolkit-alert/dist/af-alert.css";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Alert
              classModifier="success"
              icon="glyphicon glyphicon-ok"
              title="Vous êtes sur le second frontend"
            />

            <Link to={`process`}>Aller vers la page de process</Link>
          </>
        }
      />
      <Route path="process" element={<Process />} />
    </Routes>
  );
};

export default App;
