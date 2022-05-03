import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';
import { Trash, PencilSimple } from "phosphor-react";


const Card = ({ name, price, amount, description }) => {

    const [data, setData] = useState([])

    // const DeleteButton = ({ onDelete, classes }) => (
    //     <IconButton onClick={() => onDelete()}>
    //      <DeleteIcon className={classes.deleteIcon} />
    //     </IconButton>
    //    )

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {

        const response = await api.get('/food/list')
        console.log(response)
        setData(response.data)
    }

    {
        return (
            //não tem key, usar se der ruim key={}
            //map vai renderizar um container pra cada item no Array data
            data.map((data) => (
                <Container>
                    <div>
                        <h3>Nome: {data.name} </h3>
                        <h3>Preço: R$ {data.price} </h3>
                        <h3>Quantidade: {data.amount} kg</h3 >
                        <h3>Descrição: {data.description} </h3>
                    </div>
                    <icons>
                        <PencilSimple size={32} />
                        <Trash size={32} />
                    </icons>
                </Container>
            ))
        )
    }







}


export default Card;