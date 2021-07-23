import database from '../../../services/firebase'

export default function Todo ({ todo }) {
  const deleteTodo = () => {
    const todoRef = database.ref('Todo').child(todo.id);

    todoRef.remove()
  };

  const completeTodo = () => {
    const todoRef = database.ref('Todo').child(todo.id);

    todoRef.update({
      complete: !todo.complete,
    })
  }

  return(
    <div>
      <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </div>
  )
}