import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellWatch } from '../redux/action/Action';

const Watch = () => {
    const [number,setNumber] = useState(1);
    const numberOfWatch = useSelector((state)=> state.watch.numberOfWatch)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Watch -- Hooks ---</h2>
            <h3>Number Of Watches : {numberOfWatch}</h3>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={()=>dispatch(sellWatch(number))}>Sell Watch</button>
        </div>
    )
}

export default Watch