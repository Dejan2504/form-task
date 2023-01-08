import { useEffect, useState } from "react";
import Modal from "./Modal";
import EditModal from "./EditModal";

const Products = function() {
    const [data, setData]= useState({});
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [editModal, setShowEditModal] = useState(false);

    useEffect(() => {
        setDeleted(false);

        fetch(`http://localhost:3500/products?q=${searchTerm}&_sort=id&_order=desc`).then(res => {
            if(res.ok){
                return res.json();
            }else {
                console.log('error');
            }
        }).then(data => {
            console.log(data);
            setData(data);
            setLoaded(true);
        })
    },[showModal, searchTerm, deleted]);

    const openModal = function(){
        setShowModal(true);
    };
    
    const searchTermHandler = function(e){
        setSearchTerm(e.target.value);
    }

    const deleteProduct = function(_, key){

        fetch(`http://localhost:3500/products/${key}`, {
            method: 'DELETE'
        }).then(
            setDeleted(true)
        );
    }

    const editProduct = function(_ , key, title, description){

    }

    return(
        <div>
        <ul>
        <h1>Products</h1>
        <button onClick={openModal}>Add product</button>
        {showModal ? <Modal setShowModal={setShowModal}/> : ""}
        <input type="text" value={searchTerm} onChange={searchTermHandler}/>
        {loaded ? 
            data.map((product) => (
            <div>
                <li key={product.id}>
                    <h1>{product.title}</h1>
                    <h3>{product.description}</h3>
                </li>
                <button onClick={event => deleteProduct(event, product.id)}>delete</button> 
                <button onClick={() => {setShowEditModal(true)}}>edit</button>
                {editModal ? <EditModal setShowEditModal={setShowEditModal} editProduct={editProduct} /> : ""}
           </div>
        )) : 'Loading...'}
        </ul>
        </div>
        
    )
}

export default Products;