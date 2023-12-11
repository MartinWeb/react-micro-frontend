import { Link } from "react-router-dom";
import { Process } from "../pages/Process/Process";

export const appRouter = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <>
            <h1>
              Ceci est une page d'accueil d'une seconde application (le
              composant est situé à l'intérieur du front end first-app).
            </h1>

            <Link to={`process`}>Aller vers la page de process</Link>
          </>
        ),
      },
      {
        path: "process",
        element: <Process />,
      },
    ],
  },
];
