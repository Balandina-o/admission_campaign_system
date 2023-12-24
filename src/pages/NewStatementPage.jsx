import React from 'react'
import { Container, Form, Button } from "react-bootstrap";

const NewStatementPage = () => {
  return (
    <div style={{width:"100%", background:"white"}}>
      <h1>Создание нового заявления</h1>
  
      <Container className="d-flex justify-content-center align-items-center">
      <Form
        className="bg-primary bg-opacity-10 p-4 mt-5 rounded"
        style={{ width: "50%", minWidth: "500px " }}
      >
        <h2>Регистрация</h2>
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Имя..."
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Фамилия..."
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="email..."
        />
        <Form.Control
          type="text"
          className="mt-3"
          placeholder="Login..."
    
        />
        <Form.Control
          type="password"
          className="mt-3"
          placeholder="Password..."

        />
        <br />
        Прикрепите файл для аватара:
        <Form.Control type="file" className="mt-3"  />
        <div className="d-flex justify-content-end align-items-start mt-3">
          <Button variant="success" className="mt-1" >
            {" "}
            Зарегистрироваться
          </Button>
        </div>
      </Form>
    </Container>
    </div>
  )
}

export default NewStatementPage
