import { Route, Routes } from "react-router-dom";
import { Process } from "./pages/Process/Process";
import React, { Suspense } from "react";
import { Home } from "./pages/Home/Home";

const Remote = React.lazy(() => import("remoteSecond/App"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="process" element={<Process />} />
      <Route
        path="remote"
        element={
          <Suspense fallback={<p>Chargement en cours...</p>}>
            <Remote />
          </Suspense>
        }
        errorElement={<p>Erreur au chargement.</p>}
      />
    </Routes>
  );
};

export default App;
