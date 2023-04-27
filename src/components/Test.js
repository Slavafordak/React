import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import MultiSelect from './Dropdown';
import NumberInput from './Input';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';


const Test = () => {
  const products = [
    {
      id:1,
      photo:"https://example.com/photo.jpg",
  name:"Земельный участок",
  message:"Определение победителя, состоялся",
  tradeType:"Аренда и продажа земельных участков",
  area:"1000 кв.м",
  description:"Очень красивый участок с видом на горы",
  cadastralNumber:"123456789",
  landUseType:"Личное подсобное хозяйство",
  startingPrice:"500000",
  finalPrice:"700000",
  biddingEnd:"23 апреля 2023 г. 18:00",
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      photo: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of product 3',
      photo: 'https://example.com/product3.jpg',
    },
  ];
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
        <div className='ms-5'>
    <label className="text-white mt-3 fs-1">
      Реестер лотов
    </label>
    <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-3" role="search">
        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Поиск по названию..." aria-label="Search" />
      </form>
      <label className="text-white-50 mt-3 fs-5">
      Субъект местонахождения имущества
    </label>
    <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0" role="search">
      <MultiSelect/>
      </form>
      <label className="text-white-50 mt-3 fs-5">
      Организатор торгов
    </label>
    <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0" role="search">
        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Поиск по названию..." aria-label="Search" />
      </form>
      <label className="text-white mt-3 fs-2">
      Параметры лота
    </label>
    <td>
    <label className="text-white-50 mt-3 fs-5">
      Статус
    </label>
    </td>
    <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0" role="search">
    <MultiSelect/>
      </form>
      <td>
      <label className="text-white-50 mt-3 fs-5">
      Начальная цена
    </label>
      </td>
      <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0">
    <NumberInput/>
      </form>
      <td>
      <label className="text-white-50 mt-3 fs-5">
      Итоговая цена
    </label>
      </td>
      <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0">
    <NumberInput/>
      </form>
    <label className="text-white-50 mt-3 fs-5">
      Форма собственности
    </label>
    <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0" role="search">
    <MultiSelect/>
      </form>
    </div>
        </div>
        <div className='col-md-7 ml-52 pt-36'>
          <div className='row'>
            {products.map((product) => (
              <div className='col-md-12 ' key={product.id}>
              <Link to={`/products/:id`}>
                <ProductCard {...product} />
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Test