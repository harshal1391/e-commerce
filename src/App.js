import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Productinfo from "./pages/Productinfo";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";

import "./stylesheets/layout.css";
import "./stylesheets/products.css";
import "./stylesheets/register.css";
import "./stylesheets/login.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route
            path="/"
            exact
            element={
              <ProtectedRoutes>
                <Homepage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/productinfo/:productid"
            exact
            element={
              <ProtectedRoutes>
                <Productinfo />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <ProtectedRoutes>
                <CartPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
