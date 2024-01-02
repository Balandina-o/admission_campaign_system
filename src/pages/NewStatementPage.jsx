import React from 'react'
import { Link } from 'react-router-dom'

const NewStatementPage = () => {
  return (
    <div style={{width:"100%", background:"white"}}>
      <h1>Создание нового заявления</h1>
  
      <div class="container ">
        
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" accept-charset="UTF-8" method="get">
          <h2>Основная информация</h2>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Фамилия: </label>
              <input id="" value="" placeholder="Введите фамилию кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Имя: </label>
              <input id="" value="" placeholder="Введите имя кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Отчество: </label>
              <input id="" value="" placeholder="Введите отчество кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Пол: </label>
                <select id="" class="form-select w-100">
                  <option value="">Мужской</option>
                  <option value="">Женский</option>
              </select>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Дата рождения: </label>
              <input type="date" id="" value="" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Специальность: </label>
              <input id="" value="" placeholder="Введите специальность кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Учебная группа: </label>
              <input id="" value="" placeholder="Введите учебную группу кандидата" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>ВУС: </label>
              <input id="" value="" placeholder="Введите ВУС кандидата" class="form-control w-100"/>
            </div>
           
            <Link to={'/existingStatement'}>
             <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить основные данные</button>
           </Link>
      
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewStatementPage
