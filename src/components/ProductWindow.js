import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { products } from './ConstData';
import { useLocation } from "react-router-dom";

const ProductPage = () => {
	
  const location = useLocation();
  console.log(location);
  const product = products[0]

  return (
    
    <div>
      <Row>
        <Col md={7}>
          <Image src={product.photo} alt={product.name} fluid />
        </Col>
        <Col md={5} className="bg-dark text-white-50">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <ul >
            <li>Размер: {product.area}</li>
            <li>Расположение: {product.landUseType}</li>
            <li>Цена: {product.finalPrice} рублей</li>
          </ul>
          <Button variant="primary">Купить</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;