import { Link as RouterLink } from "react-router-dom";
// @mui
import { Typography, Container, Box } from "@mui/material";
// components
import Page from "../components/Page";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Page title="Home">
      <Container>
        <Hero />
      </Container>
    </Page>
  );
}
