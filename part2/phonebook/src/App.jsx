import { useEffect, useState } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons').then((response) => {
            setPersons(response.data)
        })
    })

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
