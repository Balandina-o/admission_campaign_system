import React from 'react'

const ExistingStatementPage = () => {
  return (
    <div style={{width:"100%", background:"white"}}>
  
      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h2>ФИО кандидата</h2>
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
          <h3>Основная информация</h3>
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

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h3>Результаты медецинского освидетельствования</h3>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Медицинская категория: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">A1</option>
                  <option value="">A2</option>
              </select>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить данные МО</button>
          
          </form>
        </div>
      </div>
      </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h3>Результаты профессионально-психологического отбора</h3>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Категория ППО: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">I категория </option>
                  <option value="">II категория </option>
              </select>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить данные ППО</button>
          
          </form>
        </div>
      </div>
      </div>

      <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" action="/search" accept-charset="UTF-8" method="get">
          <h3>Приоритетное право</h3>
          <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"170px"}}>Категория ППО: </label>
                <select id="" class="form-select w-100">
                  <option value="">Данные не предоставлены</option>
                  <option value="">Да </option>
                  <option value="">Нет </option>
              </select>
            </div>
            <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить данные ППО</button>
          
          </form>
        </div>
      </div>
      </div>




    </div>
  )
}

export default ExistingStatementPage
