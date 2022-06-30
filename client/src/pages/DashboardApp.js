import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Page from "../components/Page";
import { Container, IconButton, Snackbar } from "@mui/material";
import AddNewTracker from "../components/AddNewTracker";
import AllTracks from "../components/AllTracks";
import "../components/styles/dashboardapp.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const App = () => {
  const user = useContext(UserContext);
  const [items, setItems] = useState([]);

  const [toast, setToast] = useState({
    open: false,
    message: "",
  });

  useEffect(() => {
    getItems();
  }, [toast]);

  const getItems = async () => {
    try {
      const { data } = await axios.get(`/api/tracks/user/${user.email}`);

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setToast({ message: "", open: false })}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Page title="App">
      <Container>
        <AddNewTracker
          toast={setToast}
          className={items.length === 0 && `center`}
        />
        {items.length !== 0 && (
          <AllTracks items={items} setItems={setItems} toast={setToast} />
        )}
        <Snackbar
          open={toast.open}
          autoHideDuration={6000}
          onClose={() => setToast({ message: "", open: false })}
          message={toast.message}
          action={action}
        />
      </Container>
    </Page>
  );
};

export default App;
