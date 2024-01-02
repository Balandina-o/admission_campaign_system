import React from 'react'
import { Link } from 'react-router-dom'

const NewSpecialityPage = () => {
  return (
    <div>
      <div style={{width:"100%", background:"white"}}>
      {/* <h3>Создание новой специальности</h3>
        <hr></hr> */}
      <div class="container ">
      <div class="row">
        <div class="col-md-12">
          <form class="form-inline" accept-charset="UTF-8" method="get">
            <div>
            <h3>Создание новой специальности</h3>
            </div>
            <hr></hr>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Наименование: </label>
              <input id="" value="" placeholder="Введите наименование новой специальности" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Шифр: </label>
              <input id="" value="" placeholder="Введите шифр специальности" class="form-control w-100"/>
            </div>
            <div class="flex-fill mr-2 d-flex align-items-center mt-1">
              <label style={{width:"150px"}}>Подготовка: </label>
              <input id="" value="" placeholder="Введите тип кандидатов" class="form-control w-100"/>
            </div>
           
            <Link to={'/spec'}>
             <button type="button" class="btn btn-primary mt-4 mb-2" style={{float:"right"}}>Сохранить основные данные</button>
           
           </Link>
      
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default NewSpecialityPage
