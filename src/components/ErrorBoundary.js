import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError)
      return (
        <div>
          <h1>OOOOPSSS. That is not good for the user to see</h1>
        </div>
      );
  }
  return this.props.children
}

export default ErrorBoundary;
