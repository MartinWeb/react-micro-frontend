import { Outlet } from "react-router-dom";
import logo from "@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg";
import { Footer } from "@axa-fr/react-toolkit-layout-footer";
import {
  Header,
  Name,
  User,
  Title as HeaderTitle,
} from "@axa-fr/react-toolkit-layout-header";

import "@axa-fr/react-toolkit-layout-footer/dist/af-footer.css";
import "@axa-fr/react-toolkit-layout-header/dist/Header/af-header.css";
import "@axa-fr/react-toolkit-layout-header/dist/Logo/af-logo.css";
import "@axa-fr/react-toolkit-layout-header/dist/Name/af-name.css";
import "@axa-fr/react-toolkit-layout-header/dist/Title/af-title-bar.css";
import "@axa-fr/react-toolkit-layout-header/dist/User/af-user.css";

export const App = () => {
  return (
    <>
      <Header>
        <Name title="POC Micro frontend" img={logo} alt="Logo Axa" />
        <User name="Nom Prénom" profile="profil" />
      </Header>
      <HeaderTitle title="&nbsp;" />
      <main className="page">
        <Outlet />
      </main>
      <Footer
        copyright={`© ${new Date().getFullYear()} Tous droits réservés — v1.0.0`}
      />
    </>
  );
};
