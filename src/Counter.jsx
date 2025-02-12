import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    this.decrement = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
  }
  render() {
    return (
      <div className="counter">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <div className="buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}
export default Counter;
