import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <Link to="/statements" className="mt-5">
            <Button variant="success" className="mt-1" style={{ float: "right" }}>
              Авторизоваться
            </Button>
          </Link>

        </div>
      </Form>
    </Container>
  );
};

export default AuthPage;
