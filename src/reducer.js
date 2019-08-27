export default (state,action) => {
    switch(action.type) {
        case 'Add_Todo':
            let element = {id:Math.random(),completed:false,task:action.payload};
            localStorage.setItem('todos',JSON.stringify(state.concat([element])));
            return [
                 ...state,
                 element
            ]; 
        case 'Remove_Todo':
            let result = JSON.parse(localStorage.getItem('todos')).filter((item) => item.id !== action.payload.id);
            localStorage.setItem('todos',JSON.stringify(result));
            state.splice(action.payload.index,1);
            return [...state];
        case 'Change_Status':
            let updated = [];
            let array = JSON.parse(localStorage.getItem('todos')).map((item) => {
                if (item.id == action.payload) {
                  item.completed = !item.completed;
                  updated.push(item.id)
                } 
                return item
              });
              
            localStorage.setItem('todos',JSON.stringify(array));

            for(var i = 0;i < state.length;i++) {
                if(updated.indexOf(state[i].id) != -1) {
                    state[i].completed = !state[i].completed
                }
            }

            return [...state];
        case 'Find_Todos':
            return action.payload;
        default:
            return state
    }
}