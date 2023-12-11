import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Bienvenue sur notre application basé sur des micros front-end</h1>

      <Link to={`consultation`}>Aller vers la consultation</Link>
      <Link to={`remote`}>Aller vers le second frontend</Link>
    </>
  );
};
