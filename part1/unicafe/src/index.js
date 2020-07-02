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

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button onClick={handleGoodClick} text='Good' />
        <Button onClick={handleNeutralClick} text='Neutral' />
        <Button onClick={handleBadClick} text='Bad' />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);