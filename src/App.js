import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import OperationPanel from "./components/OperationPanel";
import LogoBar from "./components/LogoBar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <LogoBar />
          <div class="two_main_elements">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
