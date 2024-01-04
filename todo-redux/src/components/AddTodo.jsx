import { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;
    dispatch(addTodo(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddTodo;
