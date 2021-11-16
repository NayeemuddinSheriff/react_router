import '../App.css';
import React from 'react';

export default function Topics() {

    return (
        <>
    <div className="App">
      <header className="App-header">
        <h2 style={{color:'#61dafb'}}>TOPICS IN REACT</h2>
        <ul>
            <li>Life Cycle of React</li>
            <li>Class and Functional Component</li>
            <li>Hooks</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    </>
    )
}