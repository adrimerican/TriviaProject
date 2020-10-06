import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [ sport, setSport ] = useState({
    team1: '',
    team2: '',
    score: ''
  })

  const [ joke, setJoke ] = useState("");
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  })
  useEffect( () => {
    getApi();
  }, []);

  const getApi = () => {
    //const res = await axios.get("http://localhost:5000/myApi");
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(res.data);
  }
  // setSport {
  //   team1: res.data.Team1;
  //   team2: res.data.Team2;
  //   score: res.data.Score;
  // }

  const updateUser = (event) => {
console.log(event.target.value);

setUser({
  ...user,
  //email
  [event.target.name]: event.target.value
})

const sendData = (event) => {
  event.preventDefault();
}
  }
  return (
    <div className="App">
        {/* <h1>The Joke is: {joke}</h1>
        <h1>Team1:{sport.team1}</h1>
        <h1>Score:{sport.score}</h1>
        <h1>Team2:{sport.team2}</h1> */}

        <form onSubmit={sendData}>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">Submit</button>

        </form>
    </div>
  );
}

export default App;
