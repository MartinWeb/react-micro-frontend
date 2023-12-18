import React, { Suspense } from "react";
import { App } from "../App";
import { Home } from "../pages/Home/Home";
import Consultation from "../pages/Consultation/Consultation";
import config from "../env/environnement";
import {
  __federation_method_setRemote,
  __federation_method_getRemote,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from "__federation__";

const FirstApp = React.lazy(() => {
  __federation_method_setRemote("firstApp", {
    url: () => Promise.resolve(config.firstAppUrl),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote("firstApp", "./App");
});

const Remote = React.lazy(() => {
  __federation_method_setRemote("remote", {
    url: () => Promise.resolve(config.remoteUrl),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote("remote", "./App");
});

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
