import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ExistingStatementPage = () => {
  return (
    
    <div style={{width:"100%", background:"white"}}>
      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <div class="d-flex justify-content-between" style={{paddingTop:"10px"}}>
            <h3> Заявление кандидата - ФИО кандидата</h3>
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
            <div class="flex-fill mr-2 d-flex align-items-center mt-2 mb-2">
              <label style={{width:"170px"}}>Рейтинговый балл: </label>
              <input id="" value="" placeholder="" class="form-control w-100"/>
            </div>
          </form>
        </div>
      </div>
      </div>

      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Основная информация</h4>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Фамилия: </label>
              <input id="" value="" placeholder="Введите фамилию кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Имя: </label>
              <input id="" value="" placeholder="Введите имя кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Отчество: </label>
              <input id="" value="" placeholder="Введите отчество кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Пол: </label>
                <select id="" class="form-select w-100">
                  <option value="">Мужской</option>
                  <option value="">Женский</option>
              </select>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Дата рождения: </label>
              <input type="date" id="" value="" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Специальность: </label>
              <input id="" value="" placeholder="Введите специальность кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Учебная группа: </label>
              <input id="" value="" placeholder="Введите учебную группу кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>ВУС: </label>
              <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить основные данные</button>
          
          </form>
        </div>
      </div>
    </div>
<hr></hr>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Результаты медецинского освидетельствования</h4>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Медицинская категория: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">A1</option>
                  <option value="">A2</option>
              </select>
              <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right", width:"205px"}}>Сохранить данные МО</button>
          
          </form>
        </div>
      </div>
      </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Результаты профессионально-психологического отбора</h4>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Категория ППО: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">I категория </option>
                  <option value="">II категория </option>
              </select>
              <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right", width:"205px"}}>Сохранить данные ППО</button>
          
          </form>
        </div>
      </div>
      </div>

      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Приоритетное право</h4>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Категория ППО: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">Да </option>
                  <option value="">Нет </option>
              </select>
              <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right", width:"205px"}}>Сохранить данные ПП</button>
          
          </form>
        </div>
      </div>
      </div>

      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Данные об академической успеваемости</h4>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
             <label style={{width:"170px"}}>Средний балл: </label>
            <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
            <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right", width:"205px"}}>Сохранить данные АУ</button>
          
          </form>
        </div>
      </div>
      </div>


      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h4>Оценка уровня физической подготовки </h4>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{width:"170px"}}>Сила: </label>
                <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
                <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <label style={{width:"270px", whitespace:"nowrap", marginLeft:"150px"}}>Не предоставлен показаель "Сила" </label>
            <input type="checkbox" id="scales" name="scales" checked />

            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{width:"170px"}}>Быстрота: </label>
                <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
                <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <label style={{width:"300px", whitespace:"nowrap", marginLeft:"150px"}}>Не предоставлен показаель "Быстрота" </label>
            <input type="checkbox" id="scales" name="scales" checked />

            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
                <label style={{width:"170px"}}>Выносливость: </label>
                <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
                <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <label style={{width:"330px", whitespace:"nowrap", marginLeft:"150px"}}>Не предоставлен показаель "Выносливость" </label>
            <input type="checkbox" id="scales" name="scales" checked />
          
            <div class="flex-fill mr-2 d-flex align-items-center mt-5">
              <label style={{width:"570px", whitespace:"nowrap", marginLeft:"150px"}}>Суммарный балл по физической подготовленности: </label>
              <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"570px", whitespace:"nowrap", marginLeft:"150px"}}>Суммарный балл по физической подготовленности в 100-бальной шкале: </label>
              <input id="" value="" placeholder="" class="form-control" style={{ width:"205px"}}/>
            </div>

            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right", width:"205px"}}>Сохранить данные ОФП</button>
    
          </form>
        </div>
        <hr></hr>
            <div>
                <button type="button" class="btn btn-danger mt-4 mb-1" style={{width:"205px", marginTop:"20px"}}>Удалить заявление</button>  
            </div>
      </div>
      </div>

    </div>
  )
}

export default ExistingStatementPage
