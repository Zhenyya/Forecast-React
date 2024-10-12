import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <p class="github-link">
        <a
          href="https://github.com/Zhenyya/forecast-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code by Yevheniia Manko
        </a>
      </p>
    </div>
  );
}

export default App;
