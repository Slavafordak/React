import React, { useState } from 'react';
import Select from 'react-select';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const options = [
    { value: 'item1', label: 'Элемент 1' },
    { value: 'item2', label: 'Элемент 2' },
    { value: 'item3', label: 'Элемент 3' },
    { value: 'item4', label: 'Элемент 4' },
  ];
  const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "#ffffff" : "#ffffff",
        backgroundColor: state.isFocused ? "#373d43" : "#212529"
      }),
      menu: (provided, state) => ({
        ...provided,
        backgroundColor: "#212529"
      }),
      control: (provided, state) => ({
        ...provided,
        backgroundColor: "#212529",
        border: "yes",
        borderRadius: "6px",
        boxShadow: "none",
        borderColor:"#ced4da",
        "&:hover": {
          borderColor: "#ffffff"
        }
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: "#ffffff"
      }),
      multiValue: (provided, state) => ({
        ...provided,
        color: "#ffffff",
        backgroundColor: "#606971"
      }),
      multiValueLabel: (provided, state) => ({
        ...provided,
        color: "#ffffff"
      })
  };
  const MultiSelect = () => {
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleChange = (selectedOptions) => {
      setSelectedItems(selectedOptions);
    };
  
    return (
      <Form.Group>
        <Select
          isMulti
          isSearchable
          options={options}
          onChange={handleChange}
          value={selectedItems}
          placeholder="Не выбрано"
          styles={customStyles}
          //className="text-bg-dark text-white-50"
        />
        <Form.Text muted>
          Выбранные элементы: {selectedItems.map((item) => item.label).join(', ')}
        </Form.Text>
      </Form.Group>
    )
  }
  
export default MultiSelect

    