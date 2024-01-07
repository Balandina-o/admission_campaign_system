import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// import { Context } from "../App";

const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const { userFromStore } = useContext(Context);
  const navigate = useNavigate();

  const [users, setUserss] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  function checkUser() {
    const user = users.find(x => x.login == login & x.password == password)
    if (user != null) {
      setCurrentUser(user);
      console.log(currentUser);
      navigate("/statements");

    } else {
      alert("Неверный логин или пароль");
    }
  }

  useEffect(() => void (async () => {
    const list = await window.electronAPI.getUsersForAuth();
    setUserss(list);
    console.log(list);
  })(), [])

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-light p-4 rounded"
        style={{ minWidth: "500px ", marginTop: "150px" }}
      >
        <h2>Авторизация</h2>
        <div className="d-flex align-items-baseline">
          <label style={{ width: "70px" }}>Логин </label>
          <Form.Control
            type="text"
            className="mt-3"
            placeholder="username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-baseline">
          <label style={{ width: "70px" }}>Пароль </label>
          <Form.Control
            type="password"
            className="mt-3"
            placeholder="password"
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
    </Container>
  );
};

export default AuthPage;
