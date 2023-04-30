import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import MultiSelect from './Dropdown';
import ProductFilter from './Input';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { products } from './ConstData';

const Test = () => {
  
  
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };

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
     <ProductFilter products={products} onFilter={handleFilter}/>
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
    
    
      </form>
      <td>
      <label className="text-white-50 mt-3 fs-5">
      Итоговая цена
    </label>
      </td>
      <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-3 pt-0">
    <ProductFilter/>
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
            {filteredProducts.map((product) => (
              <div className='col-md-12 ' key={product.id}>
                <ProductCard {...product} />
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