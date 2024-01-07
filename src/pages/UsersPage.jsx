import React, { useContext } from 'react'
import { Context } from "../App";
import AdminBar from '../components/AdminBar';
import UsersCardsOnProfilePage from '../components/UsersCardsOnProfilePage';
import { Button, Container, Form } from 'react-bootstrap';

const UsersPage = () => {
  const { userFromStore } = useContext(Context);

  // const deleteSpec = async (id_spec, name) => {
  //   setSelectedSpecName(name);
  //   setShowCreateDeleteSpecConfirmModal(true);
  //   await window.electronAPI.deleteExistingSpec(id_spec);
  //   setSpecialities(specialitiesFromStore.removeSpecInStore(id_spec));
  //   navigate("/spec");
  // };

  return (
    <div style={{ background: "white" }}>
      <AdminBar
        login={userFromStore.user.login}
        role={userFromStore.user.role}
      />
      <div>
        В личном кабинете Вам доступна возможность управления пользователями системы.<br />Вы можете просмотреть всех существующих в системе пользователей, а также добавить новую учетную запись
        <div className='d-flex align-items-baseline justify-content-xxl-around'>
          <div className="p-2 card" style={{ width: "40%" }}>
            {userFromStore.usersList.map(user => (
              <UsersCardsOnProfilePage
                key={user.id}
                id={user.id}
                login={user.login}
                password={user.password}
                role={user.role}
              />
            ))}
          </div>
          <div>
            <Container className="d-flex justify-content-center align-items-center">
              <Form
                className="bg-primary bg-opacity-10 p-4 rounded"
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
                <Form.Control type="file" className="mt-3" />
                <div className="d-flex justify-content-end align-items-start mt-3">
                  <Button variant="success" className="mt-1" >
                    {" "}
                    Зарегистрироваться
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UsersPage
