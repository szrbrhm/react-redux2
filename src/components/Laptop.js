import React, {dispatch} from 'react';
import { connect } from 'react-redux';
import { sellLaptop } from '../redux/action/Action';


const Laptop = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Laptops Pure Redux</h2>
            <h3>Number Of Laptops : {props.numberOfLaptops}</h3>
            <button onClick={sellLaptop()}>Sell Laptop</button>
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        numberOfLaptops: state.laptop.numberOfLaptops
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sellLaptop: () => dispatch(sellLaptop()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Laptop);
