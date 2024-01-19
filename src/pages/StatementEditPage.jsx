import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Context } from "../App";
import { Button } from 'react-bootstrap';

export default function StatementEditPage() {
  // const isFitCategorySelect = document.getElementById('isFitCategory');

  const { specialitiesFromStore } = useContext(Context);
  const { directionsFromStore } = useContext(Context);
  const { statementsFromStore } = useContext(Context);
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("0");
  const [birthday, setBirthday] = useState("");
  const [group, setGroup] = useState("");
  const [spec, setSpec] = useState("");
  const [dir, setDir] = useState("");

  const [moCat, setMoCat] = useState("0");
  const [ppo, setPpo] = useState("0");
  const [pp, setPp] = useState("0");
  const [au, setAu] = useState("");
  const [auDec, setAuDec] = useState("");
  const [fpS, setFpS] = useState("");
  const [fpB, setFpB] = useState("");
  const [fpV, setFpV] = useState("");
  const [fpSDec, setFpSDec] = useState("");
  const [fpBDec, setFpBDec] = useState("");
  const [fpVDec, setFpVDec] = useState("");
  const [fpSum, setFpSum] = useState("");
  const [fpFinal, setFpFinal] = useState("");
  const [totalScore, setTotalScore] = useState("");


  useEffect(() => void (async () => {
    const selectDir = document.getElementById('selectDir');
    const selectSpec = document.getElementById('selectSpec');

    const stat = statementsFromStore.findStatement(id);

    setFirstName(stat.firstName);
    setSecondName(stat.secondName);
    setLastName(stat.lastName);
    setGender(stat.gender);
    setBirthday(stat.birthday);
    setGroup(stat.group);
    setSpec(stat.SpecialityId);
    setDir(stat.DirectionId);

    setMoCat(stat.moCat);
    setPpo(stat.ppo);
    setPp(stat.pp);
    setAu(stat.au);
    setAuDec(stat.auDec);
    setFpS(stat.fpS);
    setFpB(stat.fpB);
    setFpV(stat.fpV);
    setFpSDec(stat.fpSDec);
    setFpBDec(stat.fpBDec);
    setFpVDec(stat.fpVDec);
    setFpSum(stat.fpSum);
    setFpFinal(stat.fpFinal);
    setTotalScore(stat.totalScore);


    setAuDec((stat.au * 100) / 5)
    //setFirstName(stat.firstName);

    const listOfSpec = specialitiesFromStore.specList;
    const listOfDir = directionsFromStore.dirList;

    selectSpec.innerHTML = "";
    for (let i = 0; i < listOfSpec.length; i++) {
      let opt = document.createElement('option');
      opt.value = listOfSpec[i].id;
      opt.innerHTML = listOfSpec[i].name;
      selectSpec.appendChild(opt);
    }

    selectDir.innerHTML = "";
    for (let i = 0; i < listOfDir.length; i++) {
      let opt = document.createElement('option');
      opt.value = listOfDir[i].id;
      opt.innerHTML = listOfDir[i].name;
      selectDir.appendChild(opt);
    }
  })(), [])

  const updateMainInfo = async () => {
    const stateInfoForEdit = {
      secondName: secondName,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthday: birthday,
      group: group,
      SpecialityId: spec,
      DirectionId: dir,
    };
    await window.electronAPI.updateCurrentState(id, stateInfoForEdit);
    statementsFromStore.updateStateInStore(id, stateInfoForEdit);
  };

  const updateMOInfo = async () => {
    const paramForEdit = {
      moCat: moCat
    };
    await window.electronAPI.updateCurrentState(id, paramForEdit);
    statementsFromStore.updateStateInStoreOneParam(id, paramForEdit);
  };

  const updatePPOInfo = async () => {
    const paramForEdit = {
      ppo: ppo
    };
    await window.electronAPI.updateCurrentState(id, paramForEdit);
    statementsFromStore.updateStateInStoreOneParam(id, paramForEdit);
  };

  const updatePPInfo = async () => {
    const paramForEdit = {
      pp: pp
    };
    await window.electronAPI.updateCurrentState(id, paramForEdit);
    statementsFromStore.updateStateInStoreOneParam(id, paramForEdit);
  };

  const updateAuInfo = async () => {
    const paramForEdit = {
      au: au
    };
    await window.electronAPI.updateCurrentState(id, paramForEdit);
    statementsFromStore.updateStateInStoreOneParam(id, paramForEdit);

    setAuDec((au * 100) / 5)
  };

  return (
    <div style={{ width: "100%", background: "white" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline" action="/search" acceptCharset="UTF-8" method="get">
              <div className="d-flex justify-content-between" style={{ paddingTop: "10px" }}>
                <h3> Заявление кандидата - {secondName} {firstName} {lastName}</h3>
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
              <div className="flex-fill mr-2 d-flex align-items-center mt-2 mb-2">
                <label style={{ width: "170px" }}>Рейтинговый балл: </label>
                <input id="" value="" placeholder="" className="form-control w-100" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline" action="/search" acceptCharset="UTF-8" method="get">
              <h4>Основная информация</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Фамилия: </label>
                <input id="" value={secondName} onChange={(event) => setSecondName(event.target.value)} placeholder="Введите фамилию кандидата" className="form-control w-100 " />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Имя: </label>
                <input id="" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Введите имя кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Отчество: </label>
                <input id="" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Введите отчество кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Пол: </label>
                <select id="" value={gender} onChange={(event) => setGender(event.target.value)} className="form-select w-100">
                  <option value="0">Мужской</option>
                  <option value="1">Женский</option>
                </select>
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Дата рождения: </label>
                <input type="date" id="" value={birthday} onChange={(event) => setBirthday(event.target.value)} className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Специальность: </label>
                <select id="selectSpec" value={spec} onChange={(event) => setSpec(event.target.value)} className="form-select w-100">
                </select>
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Учебная группа: </label>
                <input id="" value={group} onChange={(event) => setGroup(event.target.value)} placeholder="Введите учебную группу кандидата" className="form-control w-100" />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>ВУС: </label>
                <select id="selectDir" value={dir} onChange={(event) => setDir(event.target.value)} className="form-select w-100">
                </select>
              </div>
              <button type="button" onClick={updateMainInfo} className="btn btn-primary mt-4 mb-2" style={{ float: "right" }}>Сохранить основные данные</button>
            </form>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline" action="/search" acceptCharset="UTF-8" method="get">
              <h4>Результаты медецинского освидетельствования</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Медицинская категория: </label>
                <select id="isFitCategory" value={moCat} onChange={(event) => setMoCat(event.target.value)} className="form-select w-100"
                  style={moCat == "0" | moCat == null | moCat == "9" | moCat == "10" | moCat == "11"
                    ? { border: "2px solid red" }
                    : { border: "2px solid green" }
                  }>
                  <option value="0">Данные не предоставлены</option>
                  <option value="1">A1</option>
                  <option value="2">A2</option>
                  <option value="3">A3</option>
                  <option value="4">A4</option>
                  <option value="5">Б1</option>
                  <option value="6">Б2</option>
                  <option value="7">Б3</option>
                  <option value="8">Б4</option>
                  <option value="9">В</option>
                  <option value="10">Г</option>
                  <option value="11">Д</option>
                </select>
                {moCat == "0" | moCat == null | moCat == "9" | moCat == "10" | moCat == "11"
                  ? <input value="Не годен" className="form-control" style={{ width: "205px" }} />
                  : <input value="Годен" className="form-control" style={{ width: "205px" }} />
                }
              </div>
              <button type="button" onClick={updateMOInfo} className="btn btn-primary mt-4 mb-2" style={{ float: "right", width: "205px" }}>Сохранить данные МО</button>

            </form>
          </div>
        </div>
      </div >

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <h4>Результаты профессионально-психологического отбора</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Категория ППО: </label>
                <select value={ppo} onChange={(event) => setPpo(event.target.value)} id="" className="form-select w-100"
                  style={ppo == "0" | ppo == null
                    ? { border: "2px solid red" }
                    : { border: "2px solid green" }
                  }>
                  <option value="0">Данные не предоставлены</option>
                  <option value="1">I категория </option>
                  <option value="2">II категория </option>
                  <option value="3">III категория </option>
                  <option value="4">VI категория </option>
                </select>
              </div>
              <button type="button" onClick={updatePPOInfo} className="btn btn-primary mt-4 mb-2" style={{ float: "right", width: "205px" }}>Сохранить данные ППО</button>

            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <h4>Приоритетное право</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Наличие приоритетного права: </label>
                <select value={pp} onChange={(event) => setPp(event.target.value)} id="" className="form-select w-100"
                  style={pp == "0" | pp == null
                    ? { border: "2px solid red" }
                    : { border: "2px solid green" }
                  }>
                  <option value="0">Данные не предоставлены</option>
                  <option value="1">Да </option>
                  <option value="2">Нет </option>
                </select>
              </div>
              <button type="button" onClick={updatePPInfo} className="btn btn-primary mt-4 mb-2" style={{ float: "right", width: "205px" }}>Сохранить данные ПП</button>

            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline" >
              <h4>Данные об академической успеваемости</h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Средний балл: </label>
                <input value={au} onChange={(event) => setAu(event.target.value)} placeholder="Введите средний балл академической успеваемости" className="form-control w-100"
                  style={au == "0" | au == null
                    ? { border: "2px solid red" }
                    : { border: "2px solid green" }
                  } />
                <input className="form-control" value={auDec} style={{ width: "205px" }} />
              </div>
              <button type="button" onClick={updateAuInfo} className="btn btn-primary mt-4 mb-2" style={{ float: "right", width: "205px" }}>Сохранить данные АУ</button>

            </form>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <h4>Оценка уровня физической подготовки </h4>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Сила: </label>
                <input id="" placeholder="Введите значение показателя Сила" className="form-control w-100" />
                <input id="" value={fpS} placeholder="" className="form-control" style={{ width: "205px" }} />
              </div>
              <label style={{ width: "270px", whitespace: "nowrap", marginLeft: "125px" }}>Не предоставлен показатель &quot;Сила&quot;</label>
              <input type="checkbox" id="scales" name="scales" />

              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Быстрота: </label>
                <input id="" placeholder="Введите значение показателя Быстрота" className="form-control w-100" />
                <input id="" value={fpB} placeholder="" className="form-control" style={{ width: "205px" }} />
              </div>
              <label style={{ width: "300px", whitespace: "nowrap", marginLeft: "125px" }}>Не предоставлен показатель &quot;Быстрота&quot;</label>
              <input type="checkbox" id="scales" name="scales" />

              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "170px" }}>Выносливость: </label>
                <input id="" placeholder="Введите значение показателя Выносливость" className="form-control w-100" />
                <input id="" value={fpV} placeholder="" className="form-control" style={{ width: "205px" }} />
              </div>
              <label style={{ width: "350px", whitespace: "nowrap", marginLeft: "125px" }}>Не предоставлен показатель &quot;Выносливость&quot;</label>
              <input type="checkbox" id="scales" name="scales" />

              <div className="flex-fill mr-2 d-flex align-items-center mt-5">
                <label style={{ width: "570px", whitespace: "nowrap", marginLeft: "150px" }}>Суммарный балл по физической подготовленности: </label>
                <input id="" value={fpSum} placeholder="" className="form-control" style={{ width: "205px" }} />
              </div>
              <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{ width: "570px", whitespace: "nowrap", marginLeft: "150px" }}>Суммарный балл по физической подготовленности в 100-бальной шкале: </label>
                <input id="" value={fpFinal} placeholder="" className="form-control" style={{ width: "205px" }} />
              </div>

              <button type="button" className="btn btn-primary mt-4 mb-2" style={{ float: "right", width: "205px" }}>Сохранить данные ОФП</button>

            </form>
          </div>
          <hr></hr>
          <div>
            <button type="button" className="btn btn-danger mt-4 mb-4" style={{ width: "205px", marginTop: "20px" }}>Удалить заявление</button>
          </div>
        </div>
      </div>

    </div >
  )
}
