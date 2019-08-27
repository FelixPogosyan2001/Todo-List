import React,{useState,useContext} from 'react';
import TodoContext from '../context/TodoContext';

const useInput = () => {
    const [inputText,setText] = useState('');
    return {
       bind : {
        value : inputText,
        onChange : event => setText(event.target.value),
        type : 'text'
       },
       clear : () => setText(''),
       value : () => inputText
    }
}

const AddTodo = (props) => {
    const {dispatch} = useContext(TodoContext);
    let input = useInput();
    let [switching,setQuery] = useState('add');

    const valid = (event)=> {
        event.preventDefault();
        if (switching == 'add') {
            setQuery('search');
            localStorage.setItem('todos',JSON.stringify(props.todos));
        } else if (switching == 'search') {
            setQuery('add');
            dispatch({
                type:'Find_Todos',
                payload:JSON.parse(localStorage.getItem('todos'))
            })
        }
    }

    const add = (value) => {
        if (value.trim().length > 0) {
            dispatch({
                type:'Add_Todo',
                payload:value
            });
            input.clear();
        }
    } 

    const search = (value) => {
        let newTodos = JSON.parse(localStorage.getItem('todos')).filter(todo => todo.task.toLowerCase().includes(value.toLowerCase()));
        dispatch({
            type:"Find_Todos",
            payload:newTodos
        })
    }

    const handlePress = (e) => {
        if(e.key == 'Enter' && switching == 'add') {
           add(input.value())
        } else if(e.key == 'Enter' && switching == 'search') {
           search(input.value())
        }
    }

    return(
        <div className="form-control">
            <input {...input.bind} onKeyPress={handlePress} className="form-control__input" />
            <button className="form-control__button" onClick={valid} >{switching=='add' ? 'Switch to search' : 'Switch to adding'}</button>
        </div>
    )
}
export default AddTodo;