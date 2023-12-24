import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import StatementsPage from "./pages/StatementsPage";
import AuthPage from "./pages/AuthPage";
import LogoBar from "./components/LogoBar";
import Sidebar from "./components/SideBar";
import UsersPage from "./pages/UsersPage";
import NewStatementPage from "./pages/NewStatementPage";

function App() {
  return (
    <div class="app">
        <HashRouter>
          <LogoBar />
          <div class="two_great_elements">
            <div class="sidebar"> 
            <Sidebar />
            </div>
            <div class="content">
            <Routes>
            <Route path="/statements" element={<StatementsPage />}></Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/user" element={<UsersPage />} />
            <Route path="/newStatement" element={<NewStatementPage />} />
          </Routes>
            </div>
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
