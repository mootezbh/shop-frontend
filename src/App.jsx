import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Layout from "./pages/Home/Layout";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Layout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
