import { useState } from 'react'
import database from '../../../services/firebase'

export default function Form () {
  const [ title, setTitle ] = useState('')

  const handleNewTitle = () => {
    const todoRef = database.ref('Todo')
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);

    setTitle('');
  };

  return(
    <div>
      <h1>Holu Teste</h1>
      <input 
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <button onClick={handleNewTitle}>Add</button>
    </div>
  )
}