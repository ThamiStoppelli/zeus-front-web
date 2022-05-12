import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';


const Total = () => {

    const [amount, setAmount] = useState('')
    const [price, setPrice] = useState("")
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")

    async function loadData(event, month, year) {
        event.preventDefault();
        event.stopPropagation();
        await api.get(`/food/totalMonthlyAmount?month=${month}&year=${year}`).then((response) => {
            setAmount(response.data.totalMonthlyAmount)
        })
        await api.get(`/food/totalMonthlyPrice?month=${month}&year=${year}`).then((response) => {
            setPrice(response.data.totalMonthlyPrice)
        })
    }

    {
        return (
            <Container>
                <div className="card">
                    <form className="form"  >
                        <label className="header">Calcular gastos mensais</label>
                        <div className="input">
                            <label>Mês:</label>
                            <input type="number" name="month" value={month} placeholder='ex: 5' min="1" max="12" 
                            onChange={(field) => {
                                setMonth(field.target.value) 
                                console.log(month)
                                console.log(field)
                            }} />
                        </div>
                        <div className="input">
                            <label>Ano:</label>
                            <input type="number" name="year" value={year} placeholder='ex: 2022' min="2022" max="20222" onChange={(field) => {
                                setYear(field.target.value)
                                console.log(year)
                                console.log(field)
                            }} />
                        </div>

                        <button onClick={(event) => {loadData(event, month, year)}}>
                            <h3>Calcular</h3>
                        </button>
                    </form>

                    {/* <h3>{month} de {year}</h3> */}
                    <div>
                        <span>
                            <h3>Quantidade mensal: </h3>
                            <h3>Valor mensal: </h3>
                        </span>
                        <span>
                            <h2 id="texto"> {amount} Kg </h2>
                            <h2 id="texto">R$ {price} </h2>
                        </span>
                    </div>
                </div>

            </Container>
        )
    }
}

export default Total;