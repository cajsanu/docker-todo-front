import React from "react";
import { SingleTodo } from "./SingleTodo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo) => {
          const doneInfo = (
            <>
              <span>This todo is done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
              </span>
            </>
          );

          const notDoneInfo = (
            <>
              <span>This todo is not done</span>
              <span>
                <button onClick={onClickDelete(todo)}> Delete </button>
                <button onClick={onClickComplete(todo)}> Set as done </button>
              </span>
            </>
          );

          return (
            <div key={todo._id}>
              <SingleTodo todo={todo} doneInfo={doneInfo} notDoneInfo={notDoneInfo}/>
            </div>
          );
        })
        .reduce((acc, cur, idx) => [...acc, <hr key={idx} />, cur], [])}
    </>
  );
};

export default TodoList;
