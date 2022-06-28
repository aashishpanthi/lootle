// import dependencies
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import Router from "./routes";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};

export default App;
