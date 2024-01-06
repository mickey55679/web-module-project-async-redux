import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getJokes } from './actions/Jokes';
import { connect } from 'react-redux';



function App(props) {
  console.log(props)
 const dispatch = useDispatch();
  const handleGetJokes = () => {
 dispatch(getJokes());
  };
  return (
    <div className="App">
      <button onClick={handleGetJokes}>get jokes</button>
      <div>{props.joke.type}</div>
      <div>{props.joke.setup}</div>
      <div>{props.joke.punchline}</div>
      <div>{props.error.message}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
joke: state.joke,
error: state.error,
});

export default connect(mapStateToProps) (App);

