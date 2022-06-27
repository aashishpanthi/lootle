import { Link as RouterLink } from "react-router-dom";
// @mui
import { Typography, Container, Box } from "@mui/material";
// components
import Page from "../components/Page";

export default function Home() {
  return (
    <Page title="Home">
      <Container>
        <Box sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            This is home
          </Typography>
        </Box>
      </Container>
    </Page>
  );
}
