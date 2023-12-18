import { Link } from "react-router-dom";
import { Alert } from "@axa-fr/react-toolkit-all";

import "@axa-fr/react-toolkit-alert/dist/af-alert.css";
import "@axa-fr/react-toolkit-action/dist/af-button.css";
import css from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <Alert
        classModifier="success"
        icon="glyphicon glyphicon-ok"
        title="Vous êtes sur le second frontend"
      />

      <div className={css.buttons}>
        <Link className="af-btn" to={`process`}>
          Aller vers la page de process
        </Link>
        <Link className="af-btn af-btn--reverse" to={`remote`}>
          Aller vers un second micro frontend
        </Link>
      </div>
    </>
  );
};
