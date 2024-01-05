import React, { createContext } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import StatementsPage from "./pages/StatementsPage";
import AuthPage from "./pages/AuthPage";
import LogoBar from "./components/LogoBar";
import Sidebar from "./components/SideBar";
import UsersPage from "./pages/UsersPage";
import NewStatementPage from "./pages/NewStatementPage";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import ExistingStatementPage from "./pages/ExistingStatementPage";
import NewSpecialityPage from "./pages/NewSpecialityPage";
import DirectionsPage from "./pages/DirectionsPage";
import SpecialityEditPage from "./pages/SpecialityEditPage";
import SpecialitiesStore from "./store/SpecialitiesStore";

export const Context = createContext(null);

function App() {
  return (
    <Context.Provider
      value={{
        specialitiesFromStore: new SpecialitiesStore(),
      }}
    >
      <div className="app">
        <HashRouter>
          <LogoBar />
          <div className="two_great_elements">
            {/* {true & ( */}
            <div className="sidebar">
              <Sidebar />
            </div>
            {/* )} */}
            <div className="content">
              <div>
                <Routes>
                  <Route path="/statements" element={<StatementsPage />}></Route>
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/user" element={<UsersPage />} />
                  <Route path="/newStatement" element={<NewStatementPage />} />
                  <Route path="/newSpeciality" element={<NewSpecialityPage />} />
                  <Route path="/editSpeciality/:id" element={<SpecialityEditPage />} />
                  <Route path="/existingStatement" element={<ExistingStatementPage />} />
                  <Route path="/spec" element={<SpecialtiesPage />} />
                  <Route path="/directions" element={<DirectionsPage />} />
                </Routes>
              </div>
            </div>

          </div>

        </HashRouter>
      </div>
    </Context.Provider >
  );
}

export default App;
