import { Link, Route, Routes } from "react-router-dom";
import { Process } from "./pages/Process/Process";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>
              Ceci est une page d'accueil d'une seconde application (le
              composant est situé à l'intérieur du front end first-app).
            </h1>

            <Link to={`process`}>Aller vers la page de process</Link>
          </>
        }
      />
      <Route path="process" element={<Process />} />
    </Routes>
  );
};
