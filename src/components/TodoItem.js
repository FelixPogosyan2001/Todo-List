import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../context/TodoContext';

const TodoItem = (props) => {
    let {dispatch} = useContext(TodoContext);
    
    return(
        <li style={{background:props.todo.completed ? 'red' : null}}>
            <label>
                <input 
                    checked={props.todo.completed} 
                    onChange={() => dispatch({type:'Change_Status',payload:props.todo.id})} 
                    type='checkbox'  
                />
                <span className='check'></span>
            </label>
            <span className={props.todo.completed ? 'throughLine' : ''} id='text'>{props.index+1}) {props.todo.task}</span>
            <button 
                className='btn'
                onClick={() => 
                dispatch({type:'Remove_Todo',payload:{id:props.todo.id,index:props.index}})} >
                x
            </button>
        </li>
    )
} 

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    index : PropTypes.number
}

export default TodoItem;