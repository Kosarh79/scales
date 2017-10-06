import React from "react";
import {connect} from "react-redux";
import {fetchJokes} from "../actions/jokesActions.js";
import {changeDirection} from "../actions/journeyActions.js";
@connect((store) => {
  return {
    jokes: store.jokes.jokes,
    journeys: store.change_direction,
  }

})
export default class Layout extends React.Component {
  componentWillMount() {
    //  this.props.dispatch(fetchJokes());
    this.props.dispatch(changeDirection());
  }
  fetchJokes() {
    this.props.dispatch(fetchJokes());
  }
  render() {
    console.log(this.props.jokes);
    console.log(this.props.change_direction);
    const jokes = this.props.jokes;
    let content = '';
    if (jokes.length === 0) {
      content = <button onClick = {this.fetchJokes.bind(this)}>Tell us a joke please!</button>
    } else {
      content = this.props.jokes.map(item => {
      return (
        <p key={item.id}>
          {item.joke}
        </p>
      )
    });
  }


    return (
      <div>{content}</div>
    )
  };
}
