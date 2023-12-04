import { App } from "../App";
import { Home } from "../pages/Home/Home";
import { Process } from "../pages/Process/Process";

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
        path: "/process",
        element: <Process />,
      },
    ],
  },
];
