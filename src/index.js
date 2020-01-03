import React from "react";
import ReactDOM from "react-dom";

import StatCard from "./StatCard";
import ScotchInfoBar from "./ScotchInfoBar";

import "./styles.css";

function App() {
  function formatNumber(number) {
    return (+number).toLocaleString();
  }

  function formatNumberInFrench(number) {
    return (+number).toLocaleString("fr");
  }

  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      <StatCard
        icon="👉"
        label="Points"
        number="3000"
        formatNumber={formatNumber}
      />
      <StatCard
        icon="⚡"
        label="Lightnings"
        number="6540"
        formatNumber={formatNumber}
      />
      <StatCard
        icon="🤙"
        label="Shakas"
        number="337010"
        formatNumber={formatNumber}
      />
      <StatCard
        icon="💎"
        label="Diamonds"
        number="98661"
        formatNumber={formatNumberInFrench}
      />

      <div className="info-bar">
        <ScotchInfoBar seriesNumber={8} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
