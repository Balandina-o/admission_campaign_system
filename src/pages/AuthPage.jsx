import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import WrongAuthModal from "../components/WrongAuthModal";
import { Context } from "../App";
import PropTypes from 'prop-types'

const AuthPage = ({ sideBarVisibility }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateWrongAuthModal, setShowCreateWrongAuthModal] = useState();
  const { userFromStore } = useContext(Context);
  const navigate = useNavigate();

  const [users, setUserss] = useState([])
  // const [currentUser, setCurrentUser] = useState(null)

  function checkUser() {
    const user = users.find(x => x.login == login & x.password == password)
    if (user != null) {
      userFromStore.setUser(user);
      userFromStore.setLoggedIn(true);
      if (user.role == "admin") {
        userFromStore.setIsAdmin(true);
      }
      sideBarVisibility(true);
      navigate("/statements");

    } else {
      setShowCreateWrongAuthModal(true);
    }
  }

  useEffect(() => void (async () => {
    const list = await window.electronAPI.getUsersForAuth();
    userFromStore.setUsersList(list);
    setUserss(list);
  })(), [])

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-light p-4 rounded"
        style={{ minWidth: "500px ", marginTop: "150px" }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ background: '#CFCFCF', borderRadius: 6, padding: '7px 0px' }} >Авторизация</h2>
        </div>
        Для работы в системе необходимо пройти процедуру авторизации
        <div className="d-flex align-items-baseline">
          <label style={{ width: "70px" }}>Логин </label>
          <Form.Control
            type="text"
            className="mt-3"
            placeholder="Введите логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-baseline">
          <label style={{ width: "70px" }}>Пароль </label>
          <Form.Control
            type="password"
            className="mt-3"
            placeholder="Ведите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <Button variant="success" className="mt-1" style={{ float: "right" }} onClick={checkUser}>
            Авторизоваться
          </Button>
        </div>
      </Form>
      <WrongAuthModal
        show={showCreateWrongAuthModal}
        onClose={() => setShowCreateWrongAuthModal(false)}
      >
      </WrongAuthModal>
    </Container>
  );
};

AuthPage.propTypes = {
  sideBarVisibility: PropTypes.func,
}

export default AuthPage;
