import { useState } from "react";
import "./Modal.css";

const Modal = function(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    

    const closeModal = function(){
        props.setShowModal(false);
    }

    const addProduct = function(e){
        e.preventDefault();
        const date = new Date();

        fetch('http://localhost:3500/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'createdAt': date.toISOString(),
                'title': title, 
                'description': description})
        })

        props.setShowModal(false)
        setTitle('');
        setDescription('');
    }

    return(
        <form id="addProduct" className="addProduct" onSubmit={addProduct}>
        <div className="closeModal">
        <button onClick={closeModal}>X</button>
        </div>
            <h1>Add Product</h1>
            <div className="addProductInput">
                <input type="text" maxLength={30} value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" required/>
                <textarea form="addProduct" maxLength={300} value={description} onChange={e => {setDescription(e.target.value)}} rows="10" cols="50" required>Enter description...</textarea>
                <button>Add product</button>
            </div>
        </form>
    );
}

export default Modal;