import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
const styles = {
    ul:{
        listStyle: 'none',
        margin: '0px',
        padding: '0px'
    }
}

function TodoList(props){
    return(
        <ul style={styles.ul}>
          { props.todos.map((todo, index) => {
              return   <TodoItem todo={todo} index={index} key={todo.id} clickInput={props.onToggle}/>
          }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList