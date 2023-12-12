import { Outlet } from "react-router-dom";
import { Footer } from "@axa-fr/react-toolkit-layout-footer";
import { Header, Name, User, Title } from "@axa-fr/react-toolkit-layout-header";
import logo from "@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg";

import "@axa-fr/react-toolkit-layout-footer/dist/af-footer.css";
import "@axa-fr/react-toolkit-layout-header/dist/Header/af-header.css";
import "@axa-fr/react-toolkit-layout-header/dist/Name/af-name.css";
import "@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css";
import "@axa-fr/react-toolkit-layout-header/dist/User/af-user.css";
import "@axa-fr/react-toolkit-layout-header/dist/Logo/af-logo.css";
import "@axa-fr/react-toolkit-title/dist/af-title.css";

import css from "./App.module.scss";

export const App = () => {
  return (
    <div className={css.app}>
      <Header>
        <Name title="POC Micro Front end" img={logo} alt="Logo Axa" />
        <User name="Nom Prénom" profile="profil" />
      </Header>
      <Title title="&nbsp;" />
      <main className={css.page}>
        <Outlet />
      </main>
      <Footer
        copyright={`© ${new Date().getFullYear()} Tous droits réservés — v1.0.0`}
      />
    </div>
  );
};
