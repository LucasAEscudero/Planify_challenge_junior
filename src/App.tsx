import { Routes, Route } from "react-router-dom";

import NavBarContent from "./components/NavBarContent";
import Home from "./pages/Book";

import "./App.css";

function App() {
  return (
    <>
      <nav className="hidden sm:flex justify-center border-b mt-1">
        <NavBarContent />
      </nav>
      <main className="m-5 mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <nav className="flex justify-center border-t mt-3 sm:hidden">
        <NavBarContent />
      </nav>
    </>
  );
}

export default App;
