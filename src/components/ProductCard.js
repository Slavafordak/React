import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({id, photo, name, message, tradeType, area, description, cadastralNumber, landUseType, startingPrice, finalPrice, biddingEnd }) => {
  return (
    <Link to={`/products/${id}`}>
      <Card className='bg-dark text-white-50'>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{message}</p>
          <p>Вид торгов: {tradeType}</p>
          <p>Площадь земельного участка: {area}</p>
          <p>Описание: {description}</p>
          <p>Кадастровый номер: {cadastralNumber}</p>
          <p>Вид разрешённого использования земельного участка: {landUseType}</p>
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">{startingPrice} ₽</Button>
          <Button variant="success">{finalPrice} ₽</Button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted">Дата и время окончания подачи заявок: {biddingEnd}</p>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default ProductCard;
