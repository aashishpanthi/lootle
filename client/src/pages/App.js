import React from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Page from "../components/Page";

const App = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Page title="App">
      <h1>Hello</h1>
    </Page>
  );
};

export default App;
