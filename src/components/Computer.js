import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellComputer } from '../redux/action/Action';

const Computer = () => {
    const [number, setNumber] = useState(1);
    const numberOfComputers = useSelector((state)=> state.computer.numberOfComputers)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Computers -- Hooks ---</h2>
            <h3>Number Of Computer : {numberOfComputers}</h3>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(sellComputer())}>Sell Computer</button>
        </div>
    )
}

export default Computer;