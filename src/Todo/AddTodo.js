import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)
    return{
       bind:{
        value,
        onChange: event => setValue(event.target.value)
       },
       clear: () => setValue(''),
       value: () => value
    }
}

function AddTodo({onCreate}){
    
    const input = useInputValue('')


    function submitHandler(event){
        event.preventDefault();
        
        if(input.value().trim()){
            onCreate(input.value())
            // setValue('')
            input.clear()
        }
    }

    return(
        <form className="add_form" onSubmit={submitHandler}>
            <input className="add_todo__item" {...input.bind} />
            <button className="btn_add" type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes ={
    onCreate: PropTypes.func.isRequired
}
export default AddTodo