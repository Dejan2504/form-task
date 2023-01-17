import './Card.css';
import imageNotFound from './image_not_found.png';
import edit from './edit.svg';

const Card = function(props){
    return(
        <div className="Card">
            <div className="leftCard">
                <img src={imageNotFound} />
            </div>
            <div className='rightCard'>
                <div className='textDescription'>
                    <li key={props.product.id}>
                        <h1>{props.product.title}</h1>
                        <p>{props.product.description}</p>
                    </li>
                </div>
                <div className='actionButtons'>
                    <div>
                        <button onClick={() => {props.setDeleteModal(true); props.setTarget(props.product)}}>❌</button> 
                    </div>
                    <div>
                        <button onClick={() => {props.setShowEditModal(true); props.setTarget(props.product)}}><img src={edit} /></button>
                    </div>
                </div>
           </div>
           </div>
    )
}

export default Card;