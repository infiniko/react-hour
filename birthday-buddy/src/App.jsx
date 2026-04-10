import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [friends, setFriends] = useState(data);
  console.log(friends);
  return (
    <main>
      <section className="container">
        <h3>{friends.length} birthdays today</h3>
        <List friends={friends} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setFriends([])}
        >
          Clear list
        </button>
      </section>
    </main>
  );
};
export default App;
