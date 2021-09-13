import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellWatch } from '../redux/action/Action';

const Watch = () => {
    const numberOfWatch = useSelector((state)=> state.watch.numberOfWatch)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Watch -- Hooks ---</h2>
            <h3>Number Of Watches : {numberOfWatch}</h3>
            <button onClick={()=>dispatch(sellWatch())}>Sell Watch</button>
        </div>
    )
}

export default Watch