import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogFetch from "../axios/config";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch(`/posts/${id}`);
      setTitle(response.data.title);
      setBody(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.put(`/posts/${id}`, {
      body: post,
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post">
      <h2>Editando {title}:</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            value={body || ""}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
