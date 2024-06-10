import React, { useState, useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from "../App";
import CommonWarningModal from '../components/CommonWarningModal';

const NewStatementPage = () => {
  const { specialitiesFromStore } = useContext(Context);
  const { directionsFromStore } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("0");
  const [birthday, setBirthday] = useState("");
  const [group, setGroup] = useState("");
  const [spec, setSpec] = useState("");
  const [dir, setDir] = useState("");

  const navigate = useNavigate();

  const [showCommonModal, setShowCommonModal] = useState();

  const createNewState = async () => {

    if (
      document.getElementById('secondName').value == "" ||
      document.getElementById('firstName').value == "" ||
      document.getElementById('lastName').value == "" ||
      document.getElementById('gender').value == "" ||
      document.getElementById('birthday').value == "" ||
      document.getElementById('selectSpec').value == "" ||
      document.getElementById('group').value == "" ||
      document.getElementById('selectDir').value == "") {
      console.log('dddd1')
      setShowCommonModal(true);
    } else {
      console.log('dddd')
      const newState = {
        secondName: secondName,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthday: birthday,
        group: group,
        SpecialityId: spec,
        DirectionId: dir,
      };
      const res = await window.electronAPI.createStatement(newState);
      console.log(res);
      navigate("/statements");
    }
  };

  useEffect(() => void (async () => {
    const selectDir = document.getElementById('selectDir');
    const selectSpec = document.getElementById('selectSpec');

    const listOfSpec = specialitiesFromStore.specList;
    const listOfDir = directionsFromStore.dirList;

    //selectSpec.innerHTML = "";
    for (let i = 0; i < listOfSpec.length; i++) {
      let opt = document.createElement('option');
      opt.value = listOfSpec[i].id;
      opt.innerHTML = listOfSpec[i].name;
      selectSpec.appendChild(opt);
    }

    //selectDir.innerHTML = "";
    for (let i = 0; i < listOfDir.length; i++) {
      let opt = document.createElement('option');
      opt.value = listOfDir[i].id;
      opt.innerHTML = listOfDir[i].name;
      selectDir.appendChild(opt);
    }

  })(), [])

  return (
    <div style={{ width: "100%", background: "white" }}>
      <div className="container ">

        <div className="row">
          <div className="col-md-12">
            <form className="form-inline" acceptCharset="UTF-8" method="get">
              <div className="d-flex justify-content-between" style={{ paddingTop: "10px" }}>
                <h3>Создание нового заявления</h3>
                <Link to={'/statements'}>
                  <Button
                    variant="primary"
                    style={{ width: "35px", height: "35px", fontSize: "16px" }}
                    className="bottom-0 end-0 me-3 pt-0"
                  >
                    &#10008;
                  </Button>
                </Link>
              </div>
              <hr></hr>
              <h4>Основная информация</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Фамилия: </label>
                <input id="secondName" value={secondName} onChange={(event) => setSecondName(event.target.value)} placeholder="Введите фамилию кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Имя: </label>
                <input id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Введите имя кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Отчество: </label>
                <input id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Введите отчество кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Пол: </label>
                <select id="gender" onChange={(event) => setGender(event.target.value)} className="form-select w-100">
                  <option value="0">Мужской</option>
                  <option value="1">Женский</option>
                </select>
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Дата рождения: </label>
                <input type="date" id="birthday" value={birthday} onChange={(event) => setBirthday(event.target.value)} className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>ВУС: </label>
                <select id="selectSpec" onChange={(event) => setSpec(event.target.value)} className="form-select w-100">
                  <option disabled selected>--Выберите специальность--</option>
                </select>
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Учебная группа: </label>
                <input id="group" value={group} onChange={(event) => setGroup(event.target.value)} placeholder="Введите учебную группу кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "150px" }}>Направление: </label>
                <select id="selectDir" onChange={(event) => setDir(event.target.value)} className="form-select w-100">
                  <option disabled selected>--Выберите направление--</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary mt-4 mb-2" onClick={createNewState} style={{ float: "right" }}>Сохранить основные данные</button>
            </form>
          </div>
        </div>
      </div>
      <CommonWarningModal
        show={showCommonModal}
        onClose={() => setShowCommonModal(false)}
        text='Убедитесь в том, что заполнены все поля'
      >
      </CommonWarningModal>
    </div>
  )
}

export default NewStatementPage
