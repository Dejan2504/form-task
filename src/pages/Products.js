import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";

import productData from "../services/productDataHandling";

const Products = function() {
    const [data, setData]= useState({});
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [editModal, setShowEditModal] = useState(false);
    const [target, setTarget] = useState({});
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        setDeleted(false);

        productData.searchProducts(searchTerm).then(data => {
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

    return(
        <div>
        <ul>
        <h1>Products</h1>
        <button onClick={openModal}>Add product</button>
        {showModal ? <Modal setShowModal={setShowModal}/> : ""}
        <input type="text" value={searchTerm} onChange={searchTermHandler}/>
        {editModal ? <EditModal setShowEditModal={setShowEditModal} data={data} target={target}/> : ""}
        {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} setDeleted={setDeleted} target={target} /> : ""}
        {loaded ? 
            data.map((product) => (
            <div key={product.id}>
                <li key={product.id}>
                    <h1>{product.title}</h1>
                    <h3>{product.description}</h3>
                </li>
                <button onClick={() => {setDeleteModal(true); setTarget(product)}}>delete</button> 
                <button onClick={() => {setShowEditModal(true); setTarget(product)}}>edit</button>
           </div>
        )) : 'Loading...'}
        </ul>
        </div>
        
    )
}

export default Products;