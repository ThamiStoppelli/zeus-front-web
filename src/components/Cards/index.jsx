import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';
import { Trash, PencilSimple } from "phosphor-react";
import axios from "axios";


const Card = ({ name, price, amount, description }) => {

    const [data, setData] = useState([])

    //const [model, setModel] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    async function loadData() {
        const response = await api.get('/food/list')
        console.log(response)
        setData(response.data)
    }

    function deleteData(id) {

        if (!window.confirm("Deseja realmente excluir este registro de ração?")) return;

        api.delete(`/food/delete/${id}`).then(() => this.setState({ status: 'Sucessfully deleted' }));

        alert("Registro de ração excluído com sucesso");
        
        window.location.reload(true);

        //ver sobre usar try catch:
        // try {
        //     api.delete(`/food/delete/${id}`).then(() => this.setState({ status: 'Sucessfully deleted' }));

        //     alert("Post excluído com sucesso");
        // } catch (error) {
        //     console.log(error);
        //     alert("Não foi excluir o post.")
        // }
        
        //ver sobre melhorar/estilizar os alertas/pop-ups
    }


    //async function updateData(id){
        //api.put(`/food/update/${id}`)
        //informar o que vai ser atualizado (nome, preço...)
        //direcionar para pagina form com as informações já constando nos campos de texto
    //},

    //

    // Função para editar um post específico
    // async edit(data, postId){
    //     const enpoint = apiUrl + "/posts/" + postId
    //     return axios.put(enpoint, data)
    // },

    {
        return (
            //não tem key, usar se der ruim key={}
            //map vai renderizar um container pra cada item no Array data
            data.map((data, key) => (
                <Container key={key}>
                    <info>
                        <h3>Nome: {data.name} </h3>
                        <h3>Preço: R$ {data.price} </h3>
                        <h3>Quantidade: {data.amount} kg</h3 >
                        <h3>Descrição: {data.description} </h3>
                    </info>
                    <icons>
                        <div class="button">
                            <PencilSimple size={32}  />
                            
                            {/* onClick={() => updateDate(data._id)} */}
                        </div>
                        <div class="button">
                            <Trash size={32} onClick={() => deleteData(data._id)} />
                        </div>
                    </icons>
                </Container>
            ))
        )
    }







}


export default Card;