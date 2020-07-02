import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
    setHighest(findHighest)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    setHighest(findHighest)
  }
  
  const findHighest = () => {
    let highest = votes[0]
    let highestIndex = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > highest) {
        highest = votes[i]
        highestIndex = i
      }
    }
    return highestIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes.
        <br></br>
        <Button onClick={handleVote} text='Vote' />
        <Button onClick={handleNext} text='Next anecdote' />
      </div>
      <h2>Anecdote with most votes</h2>
      <div>
        {props.anecdotes[highest]}
        <br></br>
        has {votes[highest]} votes.
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)