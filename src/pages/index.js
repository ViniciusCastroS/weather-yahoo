import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <p>Previsão do tempo</p>
        </div>
        <body className="center">
          <div className="info">
            <div className="headInfo">
              <span className="city">Niterói, RJ - Brasil</span>
              <button>x</button>
            </div>
            <div className="weatherDiv">
              <span className="weatherCondition">20ºC Nublado </span>
            </div>
            <section className="minMax">
              
            </section>
          </div>
          <div className="input">
            <input type="text" id="search" name="search" placeholder="Insira aqui o nome da cidade"></input>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
