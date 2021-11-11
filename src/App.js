import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./containers/cart/Cart";
import Home from "./containers/home/Home";
import Header from "./components/Layout/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <Header />

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
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
