import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const NewSpecialityPage = () => {
  const [name, setName] = useState("");
  const [cypher, setCypher] = useState("");
  const [type, setType] = useState("");

  const [exam, setExam] = useState("0");

  const navigate = useNavigate();

  const createNewSpec = async () => {
    const newSpec = {
      name: name,
      cypher: cypher,
      type: type,
      exam: exam,
    };
    const res = await window.electronAPI.createSpeciality(newSpec);
    console.log(res);
    navigate("/spec");
  };

  return (
    <div>
      <div style={{ width: "100%", background: "white", padding: "10px" }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <form className="form-inline">
                <div>
                  <h3>Создание новой специальности</h3>
                </div>
                <hr></hr>
                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                  <label style={{ width: "150px" }}>Наименование: </label>
                  <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Введите наименование новой специальности" className="form-control w-100" />

                </div>
                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                  <label style={{ width: "150px" }}>Шифр: </label>
                  <input id="cypher" value={cypher} onChange={(event) => setCypher(event.target.value)} placeholder="Введите шифр специальности" className="form-control w-100" />
                </div>
                <div className="flex-fill mr-2 d-flex align-items-center mt-1">
                  <label style={{ width: "150px" }}>Подготовка: </label>
                  <input id="type" value={type} onChange={(event) => setType(event.target.value)} placeholder="Введите тип кандидатов" className="form-control w-100" />
                </div>
                <div>
                  <label >Осуществлять прием по результатам баллов ЕГЭ:</label>
                  <input style={{ width: "50px" }} id="checkboxExam" type="checkbox" onChange={(event) => setExam(event.target.checked)} />
                </div>
                <button type="button" onClick={createNewSpec} className="btn btn-primary mt-4 mb-2" >Сохранить данные</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSpecialityPage
