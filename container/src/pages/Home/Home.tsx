import SimpleButton from "@axa-fr/react-toolkit-button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Bienvenue sur notre application basé sur des micros front-end</h1>

      <SimpleButton onClick={() => navigate(`/consultation`)}>
        Aller vers la consultation
      </SimpleButton>
    </>
  );
};
