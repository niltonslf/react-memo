import { memo } from 'react'

interface PersonProps {
  name: string
  id: string
  onDelete: (id: string) => void
}

const Person: React.FC<PersonProps> = ({ name, id, onDelete }) => {
  console.log(`Person ${name} rendered`)

  return (
    <li className="box mb-3">
      {name}

      <button className="button is-danger ml-2" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default memo(Person)
