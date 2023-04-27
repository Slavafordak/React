import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const ProductPage = ({ id, photo, name, message, tradeType, area, description, cadastralNumber, landUseType, startingPrice, finalPrice, biddingEnd }) => {
	
  return (
    <div>
      <Row>
        <Col md={7}>
          <Image src={photo} alt={name} fluid />
        </Col>
        <Col md={5} className="bg-dark text-white-50">
          <h2>{name}</h2>
          <p>{description}</p>
          <ul >
            <li>Размер: {area}</li>
            <li>Расположение: {landUseType}</li>
            <li>Цена: {finalPrice} рублей</li>
          </ul>
          <Button variant="primary">Купить</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;