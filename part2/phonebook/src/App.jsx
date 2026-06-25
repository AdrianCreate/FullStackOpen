import { useState } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ])
    const [newSearch, setNewSearch] = useState('')

    const handleAddPerson = (newPerson) => {
        if (persons.some((person) => person.name === newPerson.name)) {
            alert(`${newPerson.name} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
        }
    }

    const handleNewSearch = (event) => {
        setNewSearch(event.target.value)
    }

    const searchedPersons =
        newSearch.length === 0
            ? persons
            : persons.filter((p) => p.name.toLowerCase().includes(newSearch))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onSearch={setNewSearch} />
            <h2>Add a new</h2>
            <PersonForm onAdd={handleAddPerson} />
            <h2>Numbers</h2>
            <Persons persons={searchedPersons} />
        </div>
    )
}

export default App
