import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Quick Quiz</title>
    <link rel="stylesheet" href="app.css" />
  </head>
  <body>
    <div class="container">
      <div id="home" class="flex-center flex-column">
        <h1>Choose a Catagory:</h1>
        <a class="btn" href="Books.js">Books</a>
        <a class="btn" href="Comics.js">Comics</a>
        <a class="btn" href="Computers.js">Computers</a>
        <a class="btn" href="Films.js">Films</a>
        <a class="btn" href="Gadgets.js">Gadgets</a>
        <a class="btn" href="generalKnowledge.js">General Knowledge</a>
        <a class="btn" href="History.js">History</a>
        <a class="btn" href="Music.js">Music</a>
        <a class="btn" href="Mythology.js">Mythology</a>
        <a class="btn" href="Politics.js">Politics</a>
        <a class="btn" href="Television.js">Television</a>
        <a class="btn" href="videoGames.js">Video Games</a>

        <a class="btn" href="../highscores.js">High Scores</a>
      </div>
    </div>
  </body>
</div>
  
);

}

export default App;
