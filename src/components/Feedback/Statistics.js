import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default Statistics;

// import React from 'react';

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <>
//       <h2>Statistics</h2>
//       <div>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>Total: {total}</p>
//         <p>Positive feedback: {positivePercentage}%</p>
//       </div>
//     </>
//   );
// };

// export default Statistics;
