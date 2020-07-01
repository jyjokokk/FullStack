/**
 * Fullstack Open mooc - Part 1 Exercises
 * @author Jyrki Kokkola
 * @todo Unsure about the JSDoc format
 */
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42

/**
 * Header component
 * @component
 * @param {string} props to feed to for component
 */
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
<<<<<<< HEAD
    </div>
  );
};
=======
    </>
  );
};

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42

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
<<<<<<< HEAD
    </div>
  );
};
=======
    </>
  );
};

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42

/**
 * Component for part + exercises
 * @param {string} props to feed to the component
 */
const Part = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};
=======
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );
};

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42

/**
 * Component for the total sum of exercises
 * @param {string} props to feed to the component
 */
const Total = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};
=======
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  );
};

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42

/**
 * Main component to run
 */
const App = () => {
<<<<<<< HEAD
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Usings props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
=======
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Usings props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42
  const exercises3 = 14;

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
  );
};
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById("root"));
=======


ReactDOM.render(<App />, document.getElementById('root'));

>>>>>>> 643b87bf6e99d31b704cd6e10975fe860fc2dd42
