import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import Card from "../components/Card";

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
    
    return(
        <div>
        <ul>
        <h1>Products</h1>
        <button onClick={() => setShowModal(true)}>Add product</button>
        {showModal ? <Modal setShowModal={setShowModal}/> : ""}
        <input type="text" value={searchTerm} onChange={e => {setSearchTerm(e.target.value)}}/>
        {editModal ? <EditModal setShowEditModal={setShowEditModal} data={data} target={target}/> : ""}
        {deleteModal ? <DeleteModal setDeleteModal={setDeleteModal} setDeleted={setDeleted} target={target} /> : ""}
        {loaded ? 
            data.map((product) => (
                <Card key={product.id} product={product} setDeleteModal={setDeleteModal} setShowEditModal={setShowEditModal} setTarget={setTarget} />  
        )) : 'Loading...'}
        </ul>
        </div>
        
    )
}

export default Products;