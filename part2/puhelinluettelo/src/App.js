import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Jyrki Kokkola', number: "000000" }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ matching, setMatching] = useState([
    persons
  ])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      setPersons(persons.concat( {name: newName, number: newNum }))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
    setMatching(persons.filter(person => person.name.includes(searchTerm)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: <input
                  value={searchTerm}
                  onChange={handleSearchTerm}
                />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          number: <input
                    value={newNum}
                    onChange={handleNumChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {matching.map((person) =>
          <p key={matching.indexOf(person)}>
            {person.name} - {person.number}
          </p>
        )}
      </div>
    </div>
  )

}

export default App;
