import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Layout from "./pages/Home/Layout";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Shop from "./pages/Shop/Shop";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Layout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
