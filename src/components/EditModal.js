import { useState } from "react";

const EditModal = function(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return(
        <form id="editProduct" className="editProduct">
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