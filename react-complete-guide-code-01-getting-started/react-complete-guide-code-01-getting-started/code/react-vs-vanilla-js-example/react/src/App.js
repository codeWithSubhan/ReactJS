import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={index === 0 ? "active" : ""}
            onClick={() => setIndex(0)}
          >
            Why React?
          </button>
          <button
            className={index === 1 ? "active" : ""}
            onClick={() => setIndex(1)}
          >
            Core Features
          </button>
          <button
            className={index === 2 ? "active" : ""}
            onClick={() => setIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[index].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
