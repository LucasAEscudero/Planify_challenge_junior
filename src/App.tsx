import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useMyTurnsStore } from "./store/myTurnsStore";
import { turnsType } from "./lib/types";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyTurns from "./pages/MyTurns";

import "./App.css";

function App() {
  const { getMyTurns } = useMyTurnsStore((state) => state);

  useEffect(() => {
    const jsonTurns: turnsType[] = JSON.parse(
      String(localStorage.getItem("confirm-turns"))
    );

    if (jsonTurns) getMyTurns(jsonTurns);
  }, [getMyTurns]);

  return (
    <>
      <header className="sticky z-[999] hidden sm:inline-block bg-white">
        <NavBar />
      </header>
      <main className="mx-5 mt-3 min-h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-turns" element={<MyTurns />} />
        </Routes>
      </main>
      <header className="sticky z-[999] sm:hidden bottom-0 bg-white">
        <NavBar />
      </header>
    </>
  );
}

export default App;
