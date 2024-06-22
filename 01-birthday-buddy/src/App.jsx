import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>

        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}

        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear all
        </button>
      </div>
    </main>
  );
};
export default App;
