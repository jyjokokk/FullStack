import React from 'react';
import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
      {/* <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} /> */}
    </div>
  )
}

export default Content;