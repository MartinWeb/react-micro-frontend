import React, { Suspense } from "react";
import { App } from "../App";
import { Home } from "../pages/Home/Home";
import Consultation from "../pages/Consultation/Consultation";
const ChildApp = React.lazy(() => import("firstApp/App"));

export const appRouter = [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/consultation",
        element: <Consultation />,
      },
      {
        path: "/remote/*",
        element: (
          <Suspense fallback={<p>Chargement en cours...</p>}>
            <ChildApp />
          </Suspense>
        ),
        errorElement: <p>Erreur au chargement</p>,
      },
    ],
  },
];
