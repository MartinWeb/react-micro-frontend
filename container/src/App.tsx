import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <header>
        <p>POC Micro Front end</p>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer>
        <p>Copyright Martin @2023</p>
      </footer>
    </>
  );
};
