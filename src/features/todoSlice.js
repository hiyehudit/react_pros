import {createSlice} from "@reduxjs/toolkit"

    const initValue={
    todos_ar:[
        {name:"go home", time:"15:00",id:1},
        {name:"go launch", time:"16:00",id:2}
    ]
    }

    const todosSlice=createSlice({
        name:"todos",
        initialState:initValue,
        reducers:{
            addTodo:(state,actions)=>{
                state.todos_ar.push(actions.payload.todo);
            },
            resetTodos:(state,actions)=>{
                state.todos_ar=[];
            }
        }
    })

    export const {addTodo,resetTodos}=todosSlice.actions;
    export default todosSlice.reducer;

