import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

function ProductFilter({ products, onFilter }) {
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
    applyFilters({ name: event.target.value, price: priceFilter });
  };

  const handlePriceFilterChange = (event) => {
    const { name, value } = event.target;
    setPriceFilter((prevState) => ({ ...prevState, [name]: value }));
    if (name === "min" && priceFilter.max && value > priceFilter.max) {
      setPriceFilter((prevState) => ({ ...prevState, max: value }));
      applyFilters({ name: nameFilter, price: { ...priceFilter, [name]: value, max: value } });
    } else if (name === "max" && priceFilter.min && value < priceFilter.min) {
      setPriceFilter((prevState) => ({ ...prevState, min: value }));
      applyFilters({ name: nameFilter, price: { ...priceFilter, [name]: value, min: value } });
    } else {
      applyFilters({ name: nameFilter, price: { ...priceFilter, [name]: value } });
    }
  };
  

  const applyFilters = ({ name, price }) => {
    const filteredProducts = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(name.toLowerCase());
      const minPriceMatch = !price.min || product.startingPrice >= price.min;
      const maxPriceMatch = !price.max || product.startingPrice <= price.max;
      return nameMatch && minPriceMatch && maxPriceMatch;
    });
    onFilter(filteredProducts);
    
  };
  const handleMinChange = (event) => {
    const newMinPrice = event.target.value;
    setPriceFilter((prevState) => ({ ...prevState, min: newMinPrice }));
    applyFilters({ name: nameFilter, price: { ...priceFilter, min: newMinPrice } });
    if (priceFilter.max && newMinPrice > priceFilter.max) {
      setPriceFilter((prevState) => ({ ...prevState, max: newMinPrice }));
    }
  };
  

  return (
    <Form>
      <Form.Group controlId="nameFilter">
        <Form.Control type="text" placeholder="Поиск по названию..." value={nameFilter} onChange={handleNameFilterChange} className="text-bg-dark"/>
      </Form.Group>
      <Form.Group controlId="priceFilter">
        <Form.Label className="text-white-50 fs-5">Поиск по начальной стоимости</Form.Label>
        <InputGroup>
          <Form.Control type="number" placeholder="Min" name="min" value={priceFilter.min} onChange={handleMinChange} className="text-bg-dark"/>
          <InputGroup.Text className="text-bg-dark">-</InputGroup.Text>
          <Form.Control type="number" placeholder="Max" name="max" value={priceFilter.max} onChange={handlePriceFilterChange} className="text-bg-dark" />
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default ProductFilter;
