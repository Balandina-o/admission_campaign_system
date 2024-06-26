import React, { createContext, useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import StatementsPage from "./pages/StatementsPage";
import AuthPage from "./pages/AuthPage";
import LogoBar from "./components/LogoBar";
import Sidebar from "./components/SideBar";
import UsersPage from "./pages/UsersPage";
import NewStatementPage from "./pages/NewStatementPage";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import StatementEditPage from "./pages/StatementEditPage";
import NewSpecialityPage from "./pages/NewSpecialityPage";
import DirectionsPage from "./pages/DirectionsPage";
import SpecialityEditPage from "./pages/SpecialityEditPage";
import SpecialitiesStore from "./store/SpecialitiesStore";
import NewDirectionPage from "./pages/NewDirectionPage";
import DirectionEditPage from "./pages/DirectionEditPage";
import DirectionsStore from "./store/DirectionsStore";
import UsersStore from "./store/UsersStore";
import StatementsStore from "./store/StatementsStore";
import ProtocolWindow from "./pages/ProtocolWindow";
import Protocol from "./pages/Protocol";
import ProtocolStore from "./store/ProtocolStore";
import ReportPage from "./pages/ReportPage";

export const Context = createContext(null);
function App() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  function sideBarVisibility(parameter) {
    setIsSideBarVisible(parameter);
  }

  return (
    <Context.Provider
      value={{
        statementsFromStore: new StatementsStore(),
        specialitiesFromStore: new SpecialitiesStore(),
        directionsFromStore: new DirectionsStore(),
        userFromStore: new UsersStore(),
        protocolParametersFromStore: new ProtocolStore(),
      }}
    >
      <div className="app">
        <HashRouter>
          <div className="logo">
            <LogoBar />
          </div>
          <div className="two_great_elements">
            {isSideBarVisible && (
              <div className="sidebar">
                <Sidebar sideBarVisibility={sideBarVisibility} />
              </div>
            )}
            <div className="contentMain">
              <Routes>
                <Route path="/statements" element={<StatementsPage />}></Route>
                <Route path="/" element={<AuthPage sideBarVisibility={sideBarVisibility} />} />
                <Route path="/user" element={<UsersPage />} />
                <Route path="/newStatement" element={<NewStatementPage />} />
                <Route path="/newSpeciality" element={<NewSpecialityPage />} />
                <Route path="/newDirection" element={<NewDirectionPage />} />
                <Route path="/protocol" element={<Protocol />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/protocolWindow" element={<ProtocolWindow />} />
                <Route path="/editSpeciality/:id" element={<SpecialityEditPage />} />
                <Route path="/editDirection/:id" element={<DirectionEditPage />} />
                <Route path="/editStatement/:id" element={<StatementEditPage />} />
                <Route path="/spec" element={<SpecialtiesPage />} />
                <Route path="/directions" element={<DirectionsPage />} />
              </Routes>
            </div>

          </div>

        </HashRouter>
      </div>
    </Context.Provider >
  );
}

export default App;
