import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';
import { Trash, PencilSimple } from "phosphor-react";
import axios from "axios";
import moment from 'moment';


const Card = ({ name, price, amount, description, timestamps }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        const response = await api.get('/food/list')
        console.log(response)
        setData(response.data)
    }

    // Função para editar um post específico
    // async function edit (name, price, amoint, description) {
    //     const response = api + "/food/update" + loadData()
    //     return axios.put(response, data)
    // }

    function editData(id) {
        try {
            api.put(`update/${id}`, data).then(() => this.setState({ status: 'Sucessfully updated' }));
            loadData();
            alert("Compra atualizada com sucesso.");
            // return axios.put(response, dados)
        } catch (err) {
            alert("Erro, tente novamente.");
        }
    }

    // function updatedModel (e: ChangeEvent<HTMLInputElement>) {

    //     setModel({
    //         ... model,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()
    //     if (id !== undefined) {
    //       const response = await api.put(`/Item/${id}`, model)
    //     } else {
    //       const response = await api.post('/Item', model)
    //     }
    //     goBack()
    // }
  
    // function goBack () {
    //   navigate('/tasks')
    // }

    //async function updateData(id){
    //api.put(`/food/update/${id}`)},

    //informar o que vai ser atualizado (nome, preço...)
    //direcionar para pagina form com as informações já constando nos campos de texto//

    function deleteData(id) {

        if (!window.confirm("Deseja realmente excluir este registro de ração?")) return;
        api.delete(`/food/delete/${id}`).then(() => this.setState({ status: 'Sucessfully deleted' }));
        alert("Registro de ração excluído com sucesso");

        window.location.reload(true);
    }
    //melhorar/estilizar os alertas/pop-ups

    {
        return (
            //map vai renderizar um container pra cada item no Array data
            data.map((data, key) => (
                <Container key={key}>
                    <info>
                        <h3>Nome: {data.name} </h3>
                        <h3>Preço: R$ {data.price} </h3>
                        <h3>Quantidade: {data.amount} kg</h3 >
                        <h3>Descrição: {data.description} </h3>
                        <h3>Data: {moment(data.updatedAt).format('DD/MM/YYYY')} </h3>
                    </info>
                    <icons>
                        <div className="button">
                            <PencilSimple size={32} onClick={() => editData(data._id)} />
                            {/* onClick={() => updateDate(data._id)} */}
                        </div>
                        <div className="button">
                            <Trash size={32} onClick={() => deleteData(data._id)} />
                        </div>
                    </icons>
                </Container>
            ))
        )
    }


}


export default Card;