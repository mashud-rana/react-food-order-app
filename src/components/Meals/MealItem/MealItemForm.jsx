import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'
import {useRef} from 'react'

const MealItemForm = (props) => {
    const amountInputRef=useRef();

    const submitHandler=event=>{
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        props.onAddToCart(enteredAmountNumber);

    };

    return ( 
        <form action="" onSubmit={submitHandler} className={classes.form}>
            <Input label="Amount" ref={amountInputRef} input={{ 
                id:'amount_' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            } }></Input>
            <button>+ Add</button>
        </form>
     );
}
 
export default MealItemForm;