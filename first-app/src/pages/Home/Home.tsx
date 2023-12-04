import SimpleButton from "@axa-fr/react-toolkit-button";
import { useNavigate } from "react-router-dom";

import "@axa-fr/react-toolkit-button/dist/af-button.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        Ceci est une page d'accueil d'une seconde application (le composant est
        situé à l'intérieur du front end first-app).
      </h1>
      <SimpleButton onClick={() => navigate(`/process`)}>
        Aller vers la page de process
      </SimpleButton>
    </>
  );
};
