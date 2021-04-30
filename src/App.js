import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'


function App(props) {
  console.log(props)
  return (
    <div className="App">
        <h1>Counter: {props.counter}</h1>
        <div className="actions">
          <button onClick={props.onAdd}>Add 1</button>
          <button onClick={props.onSub}>Sub1 1</button>
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => {dispatch({type: 'ADD'})},
    onSub: () => {dispatch({type: 'SUB'})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
// Ad HOC Functions(Компоненти вищого порядку)