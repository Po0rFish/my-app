import { ITodo } from "../types/data";

// my ITodoItem interface includes props from ITodo(id,title,complete). Then i set new props to ITodoItem:
// toggleTodo,removeTodo. extends!!!?? This is necessary
interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;
  return (
    <div>
      <input
        type={"checkbox"}
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ display: "inline-block", margin: "0px 10px" }}>
        {title}
      </span>
      <button
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
        }}
        onClick={() => removeTodo(id)}
      >
        x
      </button>
    </div>
  );
};

export { TodoItem };
