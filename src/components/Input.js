import React from 'react'

import { InputGroup, FormControl } from 'react-bootstrap';

function NumberInput() {
    function handleKeyPress(event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
    
        // Регулярное выражение, которое позволяет вводить только цифры
        const regex = /[0-9]|\./;
    
        // Проверяем, соответствует ли введенный символ регулярному выражению
        if (!regex.test(keyValue)) {
          event.preventDefault();
        }
      }
      const customStyles = {
        color:"white",
        backgroundColor:"#212529"
      };
      
      return (
        <InputGroup className="mb-3 ">
          <FormControl
            placeholder="Введите номер телефона"
            type="tel"
            maxLength="8"
            minLength="8"
            onKeyPress={handleKeyPress}
            style={customStyles}
          />
          <InputGroup.Text style={customStyles}>-</InputGroup.Text>
          <FormControl
            placeholder="XXXX"
            type="tel"
            maxLength="8"
            minLength="8"
            onKeyPress={handleKeyPress}
            style={customStyles}
          />
        </InputGroup>
      );
    }

export default NumberInput
