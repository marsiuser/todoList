import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { findByLabelText } from '@testing-library/react'
import Context from '../context'

const styles={
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid rgb(50, 205, 50)',
        borderRadius: '4px',
        marginBottom: '.5rem',
        backgroundColor: '#fff'
    }
}
 function TodoItem({todo, index, clickInput}){
     const {removeTodo} = useContext(Context)
     const classes=[]
     if(todo.completed){
         classes.push('done')
     }
return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={todo.completed} className="have_to" onChange={()=> clickInput(todo.id)} /> 
                <strong>{index + 1}</strong>{todo.title} 
            </span>
            <button className="rm" onClick={()=>removeTodo(todo.id)}></button>
        </li>
    ) 
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    clickInput: PropTypes.func.isRequired
}

export default TodoItem