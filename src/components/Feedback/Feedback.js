import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = feedback => {
    this.setState(prevState => ({
      feedback: prevState.feedback + 1,
    }));
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalAmount = this.countTotalFeedback();
    let positivePercent = 0;
    if (good > 0) {
      positivePercent = Math.round((good / totalAmount) * 100);
    }

    return positivePercent;
  };

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.handleClick(good)}>
            Good
          </button>
          <button type="button" onClick={this.handleClick(neutral)}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClick(bad)}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
