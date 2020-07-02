/**
 * Web application for giving feedback to Unicafe.
 * (Exercises 1.6 - 1.14 of Fullstack Open mooc)
 * @author Jyrki Kokkola
 * @version 0.0.4
 * @todo Documenting the code is not done.
 */
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/**
 * Calculate the average of a list of numerical values.
 * @param {number[]} values list of values
 * @returns {number} Average of values to one decimal point.
 */
const calcAverage = (values) => {
  if (values.length === 0) {
    return 0
  }
  let sum = 0
  values.forEach(i => sum += i)
  let avg = sum / values.length
  return avg.toFixed(1)
}

/**
 * Calculate the percentage of a value when compared to another value.
 * @param {number} value Numberical value to check
 * @param {number} total Numerical value to check against
 * @returns {string} String representation of the percentage, rounded to one decimal point.
 */
const calcPercentage = (value, total) => {
  let percentage = (value / total * 100)
  return percentage.toFixed(1) + ' %'
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all}) => {
  if (all.length === 0)
    return (
      <div>No feedback given</div>
    )
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all.length} />
          <StatisticLine text='Average' value={calcAverage(all)} />
          <StatisticLine text='Percentage' value={calcPercentage(good, all.length)} /> 
        </tbody>
      </table>
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