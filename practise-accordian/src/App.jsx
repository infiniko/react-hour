import { useState } from "react";
import data from "./data";
import Questions from "./components/Questions";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
