import React from "react";
import { Container } from './style.js';


const Card = ( {name, price, amount, description} ) => {
    return (
        <Container>
            <h3>Marca: {name} </h3>
            <h3>Preço: R$ {price} </h3>
            <h3>Quantidade: {amount} kg</h3>
            <h3>Descrição: {description} </h3>
        </Container>
    )
}


export default Card;