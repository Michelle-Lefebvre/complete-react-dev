import "./App.css";
import { Component } from "react";
import Certificates from "./components/certificates/Certificates";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jackie",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}

        <Certificates />
      </div>
    );
  }
}

export default App;
