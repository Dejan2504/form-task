import { useState } from "react";
import "./EditModal.css"

const EditModal = function(props){
    const [title, setTitle] = useState(props.target.title);
    const [description, setDescription] = useState(props.target.description);

    const changeData = function(){
        fetch(`http://localhost:3500/products/${props.target.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': props.target.id,
                'title': title,
                'description': description,
                'createdAt': props.target.createdAt

            })
        })
    }

    return(
        <form id="editProduct" className="editProduct" onSubmit={changeData}>
        <div className="closeModal">
        <button onClick={() => {props.setShowEditModal(false)}}>X</button>
        </div>
            <h1>Edit Product</h1>
            <div className="editProductInput">
                <input type="text" maxLength={30} value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" required/>
                <textarea form="editProduct" maxLength={300} value={description} onChange={e => {setDescription(e.target.value)}} required>Enter description...</textarea>
                <button>Change product</button>
            </div>
        </form>
    );
}

export default EditModal;