/**
 * Fullstack Open mooc - Part 1 Exercises
 * @author Jyrki Kokkola
 * @todo Unsure about the JSDoc format
 */
import React from 'react';
import ReactDOM from 'react-dom';


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
  );
};


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
  );
};

/**
 * Component for part + exercises
 * @param {string} props to feed to the component
 */
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

/**
 * Component for the total sum of exercises
 * @param {string} props to feed to the component
 */
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

/**
 * Main component to run
 */
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Usings props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        part2={course.parts[1].name}
        part3={course.parts[2].name}
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
      <Total
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));