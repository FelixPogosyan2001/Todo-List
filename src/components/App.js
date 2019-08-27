import React,{useReducer} from 'react';
import TodoList from './TodoList';
import TodoContext from '../context/TodoContext';
import reducer from '../reducer.js';

const App = (props) => {
  let initialState = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
  const [state,dispatch] = useReducer(reducer,initialState);
  
  return(
    <TodoContext.Provider value={{dispatch}} >
        <TodoList todos={state} />
    </TodoContext.Provider>
  )
}

export default App;
