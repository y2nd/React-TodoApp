import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((task) => {
                    return <Todo setTodos={setTodos} todos={todos} text={task.text} key={task.id} todo={task}></Todo>;
                })}
            </ul>
        </div>);
}


export default TodoList;