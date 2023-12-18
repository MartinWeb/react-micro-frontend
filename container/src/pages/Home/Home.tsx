import { Link } from "react-router-dom";
import { Alert, Title } from "@axa-fr/react-toolkit-all";

import "@axa-fr/react-toolkit-action/dist/af-button.css";
import "@axa-fr/react-toolkit-title/dist/af-title.css";
import "@axa-fr/react-toolkit-alert/dist/af-alert.css";
import css from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <Title>Micro Frontends</Title>

      <Alert
        classModifier="success"
        icon="glyphicon glyphicon-ok"
        title="Vous êtes sur le frontend aggrégateur !"
      />

      <div className={css.buttons}>
        <Link className="af-btn" to={`consultation`}>
          Aller vers la consultation
        </Link>
        <Link className="af-btn af-btn--danger" to={`first`}>
          Aller vers le second frontend
        </Link>
        <Link className="af-btn af-btn--reverse" to={`remote`}>
          Aller vers le troisième frontend
        </Link>
      </div>
    </>
  );
};
