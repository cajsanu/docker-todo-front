export const SingleTodo = ({ todo, doneInfo, notDoneInfo }) => {
    
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "70%",
          margin: "auto",
        }}
      >
        <span>{todo.text}</span>
        {todo.done ? doneInfo : notDoneInfo}
      </div>
    </div>
  );
};
