import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellComputer } from '../redux/action/Action';

const Computer = () => {
    const numberOfComputers = useSelector((state)=> state.computer.numberOfComputers)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Phones -- Hooks ---</h2>
            <h3>Number Of Computer : {numberOfComputers}</h3>
            <button onClick={()=>dispatch(sellComputer())}>Sell Computer</button>
        </div>
    )
}

export default Computer;