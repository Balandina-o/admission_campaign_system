import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewStatementPage = () => {
  return (
    <div style={{width:"100%", background:"white"}}>
      <div className="container ">
        
      <div className="row">
        <div className="col-md-12">
          <form className="form-inline" acceptCharset="UTF-8" method="get">
          <div className="d-flex justify-content-between" style={{ paddingTop:"10px"}}>
      <h3>Создание нового заявления</h3>
        <Link to={'/statements'}>
          <Button
            variant="primary"
            style={{ width: "35px", height: "35px", fontSize: "16px"}}
            className="bottom-0 end-0 me-3 pt-0"
          >
            &#10008;
          </Button>
        </Link>
      </div>
      <hr></hr>
          <h4>Основная информация</h4>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Фамилия: </label>
              <input id="" value="" placeholder="Введите фамилию кандидата" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Имя: </label>
              <input id="" value="" placeholder="Введите имя кандидата" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Отчество: </label>
              <input id="" value="" placeholder="Введите отчество кандидата" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Пол: </label>
                <select id="" className="form-select w-100">
                  <option value="">Мужской</option>
                  <option value="">Женский</option>
              </select>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Дата рождения: </label>
              <input type="date" id="" value="" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Специальность: </label>
              <input id="" value="" placeholder="Введите специальность кандидата" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Учебная группа: </label>
              <input id="" value="" placeholder="Введите учебную группу кандидата" className="form-control w-100"/>
            </div>
            <div className="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>ВУС: </label>
              <input id="" value="" placeholder="Введите ВУС кандидата" className="form-control w-100"/>
            </div>
           
            <Link to={'/existingStatement'}>
             <button type="button" className="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить основные данные</button>
           </Link>
      
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewStatementPage
