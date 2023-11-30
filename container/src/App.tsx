import { App as ChildApp } from "firstApp/App";

export const App = () => {
  return (
    <>
      <h1>This is the container App !</h1>

      <ChildApp />
    </>
  );
};
