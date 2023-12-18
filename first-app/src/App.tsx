import { Route, Routes } from "react-router-dom";
import { Process } from "./pages/Process/Process";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home/Home";
import {
  __federation_method_setRemote,
  __federation_method_getRemote,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from "__federation__";

const Remote = lazy(() => {
  __federation_method_setRemote("remoteSecond", {
    url: () => Promise.resolve("http://localhost:5004/assets/remoteEntry.js"),
    format: "esm",
    from: "vite",
  });

  return __federation_method_getRemote("remoteSecond", "./App");
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="process" element={<Process />} />
      <Route
        path="remote"
        element={
          Remote ? (
            <Suspense fallback={<p>Chargement en cours...</p>}>
              <Remote />
            </Suspense>
          ) : null
        }
        errorElement={<p>Erreur au chargement.</p>}
      />
    </Routes>
  );
};

export default App;
