import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import NotFound from './NotFound.js';

const TodoList = (props) => {
    return(
        <Fragment>
            <center><h1>Todo-List</h1></center>
            <section id='addingTodo'>
                <AddTodo todos={props.todos} />
            </section>
            {props.todos.length > 0 ? 
                <ul style={styles} >
                    {props.todos.map((item,index) => <TodoItem todo={item} key ={item.id} index={index} />)}
                </ul> 
            : <NotFound/>}
        </Fragment>
    )
}

const styles = {
    margin:'0px !important',
    padding:'0px',
    listStyle:'none'
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;