import { useCallback, useState } from 'react'
import Person from '../person'
import faker from '@faker-js/faker'

const PeopleList = () => {
  const [people, setPeople] = useState([
    { id: '1', name: 'maria' },
    { id: '2', name: 'João' },
  ])

  const handleDelete = useCallback((id: string) => {
    setPeople((prevState) => prevState.filter((person) => person.id != id))
  }, [])

  const handleAddPerson = () => {
    setPeople((prevState) => [
      ...prevState,
      {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
      },
    ])
  }

  return (
    <div className="has-text-centered">
      <ul>
        {people &&
          people.map((person, index) => {
            return (
              <Person
                key={person.id}
                id={person.id}
                name={person.name}
                onDelete={handleDelete}
              />
            )
          })}
      </ul>
      <button
        className="button is-primary is-outlined"
        onClick={() => handleAddPerson()}
      >
        Add person
      </button>
    </div>
  )
}

export default PeopleList
