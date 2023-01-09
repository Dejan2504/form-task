import "./DeleteModal.css"

const DeleteModal = function(props){
    console.log(props.setDeletedModal);

    const deleteProduct = function(_, key){
        // event => deleteProduct(event, product.id)

        fetch(`http://localhost:3500/products/${key}`, {
            method: 'DELETE'
        }).then(
            props.setDeleted(true)
        );

        
        props.setDeleteModal(false);
    }

    const hideModal = function(){
        props.setDeleteModal(false);
    }

    return(
        <div className="deleteModal">
        <h1>Are you sure you want to delete?</h1>
        <button className="deleteButtons" onClick={event => deleteProduct(event, props.target.id)}>Yes</button>
        <button className="deleteButtons" onClick={hideModal}>No</button>
        </div>
    );
}

export default DeleteModal;