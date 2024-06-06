import './App.css';
import { useState } from "react";
import { requestToGroqAI } from "./utils/groq";

function App() {
  const [data, setData] = useState("");
  
  const handleSubmit = async () => {
    try {
      const content = document.getElementById('content').value;
      const ai = await requestToGroqAI(content);
      setData(ai);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setData("Error fetching data. Please try again later.");
    }
  };
  
  return (
    <main className="flex flex-col min-h-[80vh] justify-center items-center">
      <h1 className="text-indigo-500">REACT GROQ</h1>
      <form className="flex flex-col gap-4 py-4">
        <input
          className="py2 px-4 text-md rounded-md"
          placeholder="Masukan Pertanyaan"
          id="content"
          type="text"
        />

        <button
          onClick={handleSubmit}
          type="button"
          className="bg-indigo-500 py-2 px-4 font-bold rounded-md"
        >
          Kirim
        </button>
      </form>
      <div>{data}</div>
    </main>
  );
}

export default App;
