/**
 * Web application for giving feedback to Unicafe.
 * (Exercises 1.6 - 1.14 of Fullstack Open mooc)
 * @author Jyrki Kokkola
 * @version 0.0.1
 */
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Average = ({ all }) => {
  let sum = 0;
  all.forEach(i => sum += i)
  let avg = sum / all.length
  return (
    <div>
      Average {avg}
    </div>
  )
}

const Percentage = ({ good, all }) => {
  let percent = good / all.length * 100
  return (
    <div>
      Positive {percent} %
    </div>
  )
}

const Statistics = (props) => {
  if (props.all.length === 0)
    return (
      <div>No feedback given</div>
    )
  return (
    <div>
      <div>Good {props.good}</div>
      <div>Neutral {props.neutral}</div>
      <div>Bad {props.bad}</div>
      <div>All {props.all.length}</div>
      <Average all={props.all} />
      <Percentage good={props.good} all={props.all} />
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(all.concat(1))
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(all.concat(0))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(all.concat(-1))
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <Button onClick={handleGoodClick} text='Good' />
        <Button onClick={handleNeutralClick} text='Neutral' />
        <Button onClick={handleBadClick} text='Bad' />
      </div>
      <h2>Statistics</h2>
      <div>
        <Statistics all={all} good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);