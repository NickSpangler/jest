import { useState } from 'react'

const Todos = () => {

    const [value, setValue] = useState('')
    const [number, setNumber] = useState(0)
    const [todos, setTodos] = useState([])

    const handleClick = () => {
        setTodos([...todos, {id: number + 1, value: value}])
        setNumber(number + 1)
        setValue('')
    }

    return (
        <div name="Todos">
            <h1>TODOs</h1>
            <p>What needs to be done?</p>
            <input name='todoInput'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}></input>

            <button style={{marginLeft: '10px'}}
                    onClick={handleClick}>Add Item</button>
            <hr></hr>
            {todos.map(todo => <p>{todo.id}. {todo.value}</p>)}
        </div>
    )
}

export default Todos