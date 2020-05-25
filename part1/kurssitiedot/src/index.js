/**
 * Fullstack Open mooc - Part 1 Exercises
 * @author Jyrki Kokkola
 * @todo Unsure about the JSDoc format
 */
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * Header component
 * @component
 * @param {string} props to feed to for component
 */
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

/**
 * Component for the main body of page
 * @param {string} props  to feed for the component
 */
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

/**
 * Component for part + exercises
 * @param {string} props to feed to the component
 */
const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

/**
 * Component for the total sum of exercises
 * @param {string} props to feed to the component
 */
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

/**
 * Main component to run
 */
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Usings props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
