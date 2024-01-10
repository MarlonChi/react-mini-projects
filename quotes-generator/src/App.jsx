import { useState } from "react";
import Quotes from "./components/Quotes";

import quotes from "./data";

function App() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className="container mt-5">
      <Quotes text={quotes[index].texto} autor={quotes[index].autor} />
      <button className="btn btn-success mt-2" onClick={nextQuote}>
        Próxima citação
      </button>
    </div>
  );
}

export default App;
