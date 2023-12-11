import { App } from "../App";
import { Consultation } from "../pages/Consultation/Consultation";
import { Home } from "../pages/Home/Home";
import { App as ChildApp } from "firstApp/App";

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
        element: <ChildApp />,
      },
    ],
  },
];
