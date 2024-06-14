import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            status: false
        }
    ],
    addTodo: () => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete:()=>{ }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider