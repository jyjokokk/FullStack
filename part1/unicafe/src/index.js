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
  if (all.length === 0) {
    return (
      <div>
        Average will be calculated once there is given feedback.
      </div>
    )
  }
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
  if (all.length === 0) {
    return (
      <div>
      </div>
    )
  }
  let percent = good / all.length * 100
  return (
    <div>
      Positive {percent} %
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
        <div>Good {good}</div>
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
        <div>All {all.length}</div>
        <Average all={all} />
        <Percentage good={good} all={all} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);