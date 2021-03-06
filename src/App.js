import React, { useState } from "react";
import style from "./styles.css";

export default function App() {
  return (
    <div className="boxColoursWrapper" data-testid="test-abc">
      <GridSystem />
    </div>
  );
}

export const GridSystem = () => {
  const [dabba, setdabba] = useState([
    {
      number: 1,
      className: "red"
    },
    {
      number: 2,
      className: "black"
    },
    {
      number: 3,
      className: "grey"
    },
    {
      number: 4,
      className: "grey"
    },
    {
      number: 5,
      className: "red"
    },
    {
      number: 6,
      className: "green"
    },
    {
      number: 7,
      className: "red"
    },
    {
      number: 8,
      className: "blue"
    },
    {
      number: 9,
      className: "grey"
    }
  ]);

  const [sortFlag, setSort] = useState(false);
  const [shuffleFlag, setShuffle] = useState(false);

  return (
    <div data-testid="grid-system">
      <div className="gridWrapper">
        {dabba
          .sort((a, b) => {
            if (sortFlag) {
              return a.number - b.number;
            }
            if (shuffleFlag) {
              return Math.random() - 0.5;
            }
            return null;
          })
          .map(boxes => {
            return (
              <div className={`boxColours ${boxes.className}`}>
                <h1>{boxes.number}</h1>
              </div>
            );
          })}
      </div>
      <div className="buttonsWrapper">
        <input
          type="button"
          value="sort"
          onClick={event => {
            setSort(true);
            setShuffle(false);
          }}
        />
        <input
          type="button"
          value="shuffle"
          onClick={event => {
            setShuffle(true);
            setSort(false);
          }}
        />
      </div>
    </div>
  );
};

