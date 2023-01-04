import { useEffect, useState } from "react";
import Modal from "./Modal";

const Products = function() {
    const [data, setData]= useState({});
    const [loaded, setLoaded] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3500/products').then(res => {
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
    },[]);

    const addHandler = function(){
        setShowModal(true);
    };

    return(
        <div>
        
        <ul>
        <h1>Products</h1>
        <button onClick={addHandler}>Add product</button>
        {showModal ? <Modal /> : ""}
        <input type="text" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
        {loaded ? 
            data.map((product) => (
            <li key={product.id}>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            </li>
        )) : 'Loading...'}
        </ul>
        </div>
        
    )
}

export default Products;