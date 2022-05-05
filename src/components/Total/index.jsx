import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';


const Total = ({ totalPrice, totalAmount }) => {

    const [amount, setAmount] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        await api.get('/food/totalAmount').then((response) => {
            setAmount(response.data.totalAmount)
        })
        await api.get('/food/totalPrice').then((response) => {
            setPrice(response.data.totalPrice)
        })
    }

    {
        return (
            <Container>
                <span>
                    <h3>Quantidade total: </h3>
                    <h3>Valor total: </h3>
                </span>
                <span>
                    <h2 id="texto"> {amount} Kg </h2>
                    <h2 id="texto">R$ {price} </h2>
                </span>
            </Container>
        )
    }
}

export default Total;