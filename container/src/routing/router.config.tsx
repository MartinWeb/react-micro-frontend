import React, { Suspense } from "react";
import { App } from "../App";
import { Home } from "../pages/Home/Home";
import Consultation from "../pages/Consultation/Consultation";
const FirstApp = React.lazy(() => import("firstApp/App"));
const Remote = React.lazy(() => import("remote/App"));

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
        path: "/first/*",
        element: (
          <Suspense fallback={<p>Chargement en cours...</p>}>
            <FirstApp />
          </Suspense>
        ),
        errorElement: <p>Erreur au chargement</p>,
      },
      {
        path: "/remote/*",
        element: (
          <Suspense fallback={<p>Chargement en cours...</p>}>
            <Remote />
          </Suspense>
        ),
        errorElement: <p>Erreur au chargement</p>,
      },
    ],
  },
];
