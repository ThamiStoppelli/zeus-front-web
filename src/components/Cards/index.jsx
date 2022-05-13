import React, { useState, useEffect } from "react";
import { Container } from './style.js';
import api from '../../services/api';
import { Trash, PencilSimple } from "phosphor-react";
import moment from 'moment';


const Card = () => {

    const [data, setData] = useState([])
    //const [edit, setEdit] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [editId, setEditId] = useState('')
    const [modal, setModal] = useState(false);

    useEffect(() => {
        loadData();
    }, [])
    useEffect(() => { console.log(editId) }, [editId])
    async function loadData() {
        const response = await api.get('/food/list')
        setData(response.data)
    }

    function showData(data) {
        setModal(true);
        //setEdit(data);
        setEditId(data._id)
        setName(data.name)
        setPrice(data.price)
        setAmount(data.amount)
        setDescription(data.description)
        console.log(editId);
    }

    async function editData(editId) {
        const updatedData = {
            name: name,
            price: price,
            amount: amount,
            description: description
        };

        if(updatedData.name == '' || updatedData.price == '' || updatedData.amount == '' ||updatedData.description =='') {
            alert("Preencha os campos obrigatórios para cadastrar");
        } else {
            
            await api.put(`/food/update/${editId}`, updatedData)
            .then(() => this.setState({ status: 'Sucessfully updated' }))
            .catch((err) => {
                console.log(err);
                console.log('teste');
                //alert("Não foi possível editar");  -> ver sobre trocar o then. para try and catch
            })
            setModal(false);
            loadData();
           // window.location.reload(true);
            alert("Compra atualizada com sucesso.");
        }
    }

function deleteData(id) {

    if (!window.confirm("Deseja realmente excluir este registro de ração?")) return;
    api.delete(`/food/delete/${id}`).then(() => this.setState({ status: 'Sucessfully deleted' }));
    alert("Registro de ração excluído com sucesso");

    window.location.reload(true);
}
//melhorar/estilizar os alertas/pop-ups

// function handleChange(field) {
//     const { name, value } = field.target;
//     setEdit({ ...data, [name]: value })
//     console.log(field.target.value)
//   }

return (
    //map vai renderizar um container pra cada item no Array data
    data.map((data, id) => (

        <div>
            <Container key={id}>
                <info>
                    <h3>Nome: {data.name} </h3>
                    <h3>Preço: R$ {data.price} </h3>
                    <h3>Quantidade: {data.amount} kg</h3 >
                    <h3>Descrição: {data.description} </h3>
                    <h3>Data: {moment(data.updatedAt).format('DD/MM/YYYY')} </h3>
                </info>
                <icons>
                    <div className="button">
                        <PencilSimple size={32} onClick={() => { showData(data) }} />
                        {/* <PencilSimple size={32} onClick={() => editData(data._id)} /> */}
                        {modal ?
                            <div className="containerModal">
                                <div className="modal">
                                    <h2>Editar ração</h2>
                                    <div className="form">
                                        <label>
                                            Marca da ração:
                                            <input type="text" name="name" value={name} placeholder='Nome da marca' onChange={(e) => setName(e.target.value)} />
                                        </label>
                                        <label>
                                            Preço (R$):
                                            <input type="number" name="price" value={price} placeholder='Preço em reais' step="0.01" min="0.01" onChange={(e) => setPrice(e.target.value)} />
                                        </label>
                                        <label>
                                            Quantidade (kg):
                                            <input type="number" name="amount" value={amount} placeholder='Quantidade em quilogramas' step="0.1" min="0.1" onChange={(e) => setAmount(e.target.value)} />
                                        </label>
                                        <label>
                                            Descrição:
                                            <input type="text" name="description" value={description} placeholder='' onChange={(e) => setDescription(e.target.value)} />
                                        </label>

                                        <div className="buttons">
                                            <button className='goBackButton' onClick={() => setModal(false)}>Voltar</button>
                                            <button className='editButton' type="submit" value="Editar"
                                                onClick={() => editData(editId)}>Editar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                    <div className="button">
                        <Trash size={32} onClick={() => deleteData(data._id)} />
                    </div>
                </icons>
            </Container>
        </div>
    ))
)


}


export default Card;