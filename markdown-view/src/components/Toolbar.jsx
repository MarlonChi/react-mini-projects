const Toolbar = ({ insertText }) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText("#", "")}>h1</button>
      <button onClick={() => insertText("##", "")}>h2</button>
      <button onClick={() => insertText("**", "**")}>Bold</button>
      <button onClick={() => insertText("*", "*")}>Itálico</button>
      <button onClick={() => insertText("[link", "](https://)")}>Link</button>
      <button onClick={() => insertText("```", "```")}>Code block</button>
      <button onClick={() => insertText("- ", "")}>List Item</button>
      <button onClick={() => insertText("\n---\n", "")}>Horizontal Line</button>
    </div>
  );
};

export default Toolbar;
