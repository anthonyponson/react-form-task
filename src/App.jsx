import React, { useState } from 'react'
import './styles.css'

function App() {
  const [taskName, setName] = useState('')
  const [taskDes, setDes] = useState('')
  const [checked, setChecked] = useState(false)
  const [isFormSubmited, setIsFormSubmited] = useState(false)
  const [tasks, setTasks] = useState([])

  const inputChange = (e) => {
    console.log(e.target.value)
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else {
      setDes(e.target.value)
    }
  }

  const checkboxChecked = (e) => {
    setChecked(e.target.checked)
  }

  const handleClicksubmit = (e) => {
    e.preventDefault()
    setIsFormSubmited(true)
    if (taskName === '' || taskDes === '') return
    console.log(taskName, taskDes)

    const newTask = { taskName, taskDes, checked }
    setTasks([...tasks, newTask])
    console.log(newTask)
  }
  return (
    <>
      <form onSubmit={handleClicksubmit}>
        <input
          name="name"
          value={taskName}
          onChange={inputChange}
          type="text"
        />
        {taskName === '' && isFormSubmited && (
          <div className="task-dev">task name required</div>
        )}

        <input name="des" value={taskDes} onChange={inputChange} type="text" />

        {taskDes === '' && isFormSubmited && (
          <div className="task-dev">task des required</div>
        )}

        <input checked={checked} type="checkbox" onChange={checkboxChecked} />
        <input type="submit" />
      </form>

      <div>
        <h1>Taks: </h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {' '}
              {task.taskName} {task.taskDes}{' '}
              {task.checked ? 'Completed' : 'Not completed '}
            </li>
          ))}{' '}
        </ul>
      </div>
    </>
  )
}

export default App
