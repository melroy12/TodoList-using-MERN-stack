
import { useState } from "react";

import { addNewTodo } from "../redux/actions/actions";

import { useDispatch } from "react-redux";

const TodoForm =()=>{

    const [text,setText]=useState("");


const dispatch=useDispatch();
    

const onFormSubmit=(e)=>{
e.preventDefault();

dispatch(addNewTodo(text));

setText('');

}


const onInputchange =(e)=>{
    setText(e.target.value);
}

    return(

        <form className="form" onSubmit={onFormSubmit}> 
            <input 
                placeholder="Enter new task"
                className="input"
                onChange={onInputchange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;