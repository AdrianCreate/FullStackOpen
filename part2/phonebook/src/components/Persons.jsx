import './Persons.css'

const Persons = ({ persons, onDelete }) => {
    return (
        <div>
            {persons.map((person) => (
                <div className="person-row" key={person.id}>
                    <p>
                        {person.name} {person.number}
                    </p>
                    <button onClick={() => onDelete(person.id)}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Persons
