import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./containers/cart/Cart";
import Home from "./containers/home/Home";
import TeamList from "./containers/list/TeamList";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <Container>
        <Box />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />

          <Route
            exact
            path="/cart"
            element={<Cart />}
          />

          <Route
            exact
            path="/list"
            element={<TeamList />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
