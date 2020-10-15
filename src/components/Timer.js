import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { minute: 0, second: 0 };
    }
  
    render() {
      return (
        <div className="stopwatch">
          {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:{this
            .state.second < 10
            ? "0" + this.state.second
          : this.state.second}
        </div>
      );
    }
    componentDidMount() {
      setInterval(() => {
        this.setState((state, props) => {
          return {
            minute: state.second === 59 ? state.minute + 1 : state.minute,
            second: state.second === 59 ? 0 : state.second + 1
          };
        });
      }, 1000);
    }
  }
  

  export default Timer;
  
