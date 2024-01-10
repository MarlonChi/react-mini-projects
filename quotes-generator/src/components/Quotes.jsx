import { useEffect } from "react";
import { useState } from "react";

const Quotes = ({ text, autor }) => {
  const [traduction, setTraduction] = useState("");

  async function translationQuote(lang) {
    try {
      const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: "pt",
          target: lang,
        }),
      });

      const data = await response.json();
      setTraduction(data.translatedText);
    } catch (e) {
      console.log("Erro ao traduzir");
      console.log(e);
    }
  }

  useEffect(() => {
    setTraduction("");
  }, [text]);

  return (
    <div>
      <blockquote className="blockquote">
        <p>{text}</p>
        {traduction && <p>{traduction}</p>}
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
      <button
        className="btn btn-primary mr-1"
        onClick={() => translationQuote("en")}
      >
        Traduzir para o Inglês
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => translationQuote("es")}
      >
        Traduzir para o Espanhol
      </button>
    </div>
  );
};

export default Quotes;
