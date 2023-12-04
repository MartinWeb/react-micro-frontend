import { App } from "../App";
import { Consultation } from "../pages/Consultation/Consultation";
import { Home } from "../pages/Home/Home";

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
    ],
  },
];
