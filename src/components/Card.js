const Card = function(props){
    return(
        <div>
                <li key={props.product.id}>
                    <h1>{props.product.title}</h1>
                    <h3>{props.product.description}</h3>
                </li>
                <button onClick={() => {props.setDeleteModal(true); props.setTarget(props.product)}}>DELETE</button> 
                <button onClick={() => {props.setShowEditModal(true); props.setTarget(props.product)}}>EDIT</button>
           </div>
    )
}

export default Card;