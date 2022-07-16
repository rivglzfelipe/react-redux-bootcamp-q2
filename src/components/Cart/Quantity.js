import { QuantityContainer } from './CartStyles';
import { useDispatch } from 'react-redux';
import { changeQuantity, remove } from './../../app/cart.ts';
 
 export const QuantityElement = (props) => {
    const dispatch = useDispatch();
     return (
        <QuantityContainer>
            <input 
                type="number" 
                min="0" 
                value={props.quantity} 
                onChange={(e) => dispatch(changeQuantity({'id': props.id, 'quantity':props.quantity, 'event':e.target.value})) } 
            />
            <button onClick={()=>dispatch(remove(props.id))}>Remove</button>
        </QuantityContainer>
     )
 }