import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function HandleChange(e) {
    setTodo(e.target.value);
    console.log(todo);
  }

  //add a todo
  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: todo,
      date: new Date().toLocaleString(),
      isComplete: false
    }
    setTodos([...todos, newTodo]);
    setTodo("")
    console.log("hello ", todos)

  }

  return (
    <div className="App">
      <div className="container">
      </div>
      <div className="todowrapper">
        <div className="titleBox">
          <span className="title">LoveTodo</span>
        </div>
        <div className="inputBox">
          <input type="text" className='todoinput' value={todo} placeholder='Add a new task' onChange={(e) => (HandleChange(e))} />
          <span onClick={addTodo} className="material-symbols-outlined send"  >
            send
          </span>
        </div>
        <div className="todoDisplayBox">
          {todos.length != 0 &&
            <>
              <div className="info">
                <div className="infoWrapper">
                  <span className="infoItem">Created Tasks: </span><div className="createdList">1</div>
                </div>
                <div className="infoWrapper">
                  <span className="infoItem">Completed Tasks:</span><div className="createdList">1/1</div>
                </div>
              </div>
              <hr />
            </>
          }

          <div className="todoItemCol">

            {
              todos && todos.map((task) => (

                <div className="todoItem">
                  <div className="todoItemWrapper">
                    <div className="checkbox">
                      <span class="material-symbols-outlined check">
                        check_circle
                      </span>
                    </div>
                    <div className="todoDetails">
                      <span className="todoTitle">{task.title}</span>
                      <span className="todoTime">{task.date}</span>
                    </div>
                    <div className="action">
                      <span className="material-symbols-outlined check">
                        delete
                      </span>
                    </div>
                  </div>
                </div>

              ))
            }



          </div>
        </div>
      </div>
      <div className="love">
        <span className="author">Made with <span className="emoji">❤️</span> Abhishek</span>
      </div>
    </div>
  );
}

export default App;