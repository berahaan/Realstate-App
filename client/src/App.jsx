import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Signin from "./pages/Signin";
function App() {
  return (
    <Router>
      <Header />
      {/* this can help us to make this pages to  be appeared on every pages or components  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
