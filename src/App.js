import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./containers/cart/Cart";
import Home from "./containers/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/"
          element={<Cart />}
        />
      </Routes>
    </Router>
  );
}

export default App;
