import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
  })

  return (
    <>
      <h1 className="main-heading">Welcome to the Jokes Page</h1>
      <p className="joke-length">JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id} className="joke-container">
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
