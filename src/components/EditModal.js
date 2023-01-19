import { useState } from "react";
import productData from "../services/productDataHandling";

import "./EditModal.css"

const EditModal = function(props){
    const id = props.target.id;
    const createdAt = props.target.createdAt;
    const [title, setTitle] = useState(props.target.title);
    const [description, setDescription] = useState(props.target.description);

    const changeData = function(){
        productData.editProduct(id, title, description, createdAt);
    }

    return(
        <form id="editProduct" className="editProduct" onSubmit={changeData}>
        <div className="closeModal">
        <button onClick={() => {props.setShowEditModal(false)}} className="closeEditModal">X</button>
        </div>
            <h1>Edit Product</h1>
            <div className="editProductInput">
                <input type="text" maxLength={30} value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" required/>
                <textarea form="editProduct" maxLength={300} value={description} onChange={e => {setDescription(e.target.value)}}  required>Enter description...</textarea>
                <button className="changeProduct">Change product</button>
            </div>
        </form>
    );
}

export default EditModal;