import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';


const Total = ({ totalPrice, totalAmount }) => {

    const [amount, setAmount] = useState("")
    const [price, setPrice] = useState("")
    const [year, setYear] = useState()
    const [month, setMonth] = useState()

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        //definir valor selecionado como query para mes e ano
        await api.get(`/food/totalMonthlyAmount?month=${month}&year=${year}`).then((response) => {
            console.log(response)
            setAmount(response.data.totalAmount)
        }, (err) => {
            console.log("erro", err)
        })
        await api.get('/food/totalMonthlyPrice').then((response) => {
            setPrice(response.data.totalPrice)
        })
    }

    // function calcularTotal() {

    // }

    {
        return (
            <Container>
                <div className="card">
                    <form className="form" >
                        <label className="header">Calcular gastos mensais</label>
                        <div className="input">
                            <label>Mês:</label>
                            <input type="number" name="month" value={month} placeholder='ex: 5' min="1" max="12" onChange={(field) => {setMonth(field.target.value)
                            console.log(month)}} />
                        </div>
                        <div className="input">
                            <label>Ano:</label>
                            <input type="number" name="year" value={year} placeholder='ex: 2022' min="2022" max="2040" onChange={(field) => setYear(field.target.value)} />
                        </div>

                        <button onClick={() => loadData()}>
                            {/* onClick={this.Calculate} */}
                            <h3>Calcular</h3>
                        </button>
                    </form>

                    <h2>{ }</h2>
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