import React from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Page from "../components/Page";
import { Container } from "@mui/material";
import AddNewTracker from "../components/AddNewTracker";
import AllTracks from "../components/AllTracks";

const items = [
  {
    id: 123,
    url: "https://amazon.com",
    site: "amazon",
    image: "/static/video-placeholder.jpg",
    name: "Macbook air",
    type: "product",
    history: [
      {
        date: new Date(),
        price: 110,
      },
      {
        date: new Date(),
        price: 111,
      },
      {
        date: new Date(),
        price: 101,
      },
    ],
    demandPrice: 100,
    informed: false,
  },
];

const App = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Page title="App">
      <Container>
        <AddNewTracker />
        <AllTracks items={items} />
      </Container>
    </Page>
  );
};

export default App;
