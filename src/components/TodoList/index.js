import { useState, useEffect } from "react"
import database from '../../../services/firebase'
import Todo from "../Todo";

export default function TodoList () {
  const [ todoList, setTodoList ] = useState();

  useEffect(() => {
    const todoRef = database.ref('Todo');

    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];

      for (let id in todos) {
        todoList.push({id, ...todos[id]});
      }

      setTodoList(todoList);
    })
  }, [])

  return(
    <div>{todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index}/>): ''}</div>
  )
}