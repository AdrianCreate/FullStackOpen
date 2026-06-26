import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import Persons from './components/Persons.jsx'
import personService from './services/persons.js'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
       personService.getAll()
        .then(initialPersons => {
            setPersons((initialPersons))
        })
    })

    const handleAddPerson = (newPerson) => {
        if (persons.some((person) => person.name === newPerson.name)) {
            if(window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
                const personToUpdate = persons.find(p => p.name === newPerson.name)
                personService.update(personToUpdate.id, newPerson).then((returnedPerson) => {
                    setPersons(persons.map(person => person.id === personToUpdate.id ? returnedPerson : person))
                })
            }
        } else {
            personService.create(newPerson).then((returnedPerson) => {
                setPersons(persons.concat(returnedPerson))
            })
        }
    }

    const handleDeletePerson = (personId) => {
        if(window.confirm(`Delete ${persons.find(person => person.id === personId).name} ?`)) {
            personService.remove(personId).then(() => {
                setPersons((initialPersons) => initialPersons.filter((person) => person !== personId))
            })
        }
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
            <Persons persons={searchedPersons} onDelete={handleDeletePerson} />
        </div>
    )
}

export default App
