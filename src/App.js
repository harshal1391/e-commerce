import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Productinfo from "./pages/Productinfo";
import CartPage from "./pages/CartPage";

import './stylesheets/layout.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/productinfo" exact element={<Productinfo />} />
          <Route path="/cart" exact element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
