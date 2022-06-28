import { Navigate } from "react-router-dom";
// @mui
import { Container } from "@mui/material";
// components
import Page from "../components/Page";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function Home() {
  const user = useContext(UserContext);

  if (user) {
    return <Navigate to="/app/dashboard" />;
  }

  return (
    <Page title="Home">
      <Container>
        <Hero />
        <FeaturesSection />
      </Container>
    </Page>
  );
}
