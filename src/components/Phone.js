import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sellPhone } from '../redux/action/Action';

const Phone = () => {
    const numberOfPhone = useSelector((state)=> state.phone.numberOfPhone)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h2>Phones -- Hooks ---</h2>
            <h3>Number Of Phones : {numberOfPhone}</h3>
            <button onClick={()=>dispatch(sellPhone())}>Sell Phone</button>
        </div>
    )
}

export default Phone
