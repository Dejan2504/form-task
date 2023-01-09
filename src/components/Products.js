import { useEffect, useState } from "react";
import Modal from "./Modal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

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
        // event => deleteProduct(event, product.id)

        fetch(`http://localhost:3500/products/${key}`, {
            method: 'DELETE'
        }).then(
            setDeleted(true)
        );
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
                <button onClick={e => {setDeleteModal(true); setTarget(product)}}>delete</button> 
                <button onClick={(e) => {setShowEditModal(true); setTarget(product)}}>edit</button>
           </div>
        )) : 'Loading...'}
        </ul>
        </div>
        
    )
}

export default Products;