import './index.css';
// import Feedback from './Feedback/Feedback';
import { Layout } from './components/Layout';
import { Component } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const targetName = evt.currentTarget.name;
    this.setState(prevState => ({
      [targetName]: prevState[targetName] + 1,
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
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Layout>
    );
  }
}

// handleGood = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };

// handleNeutral = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };

// handleBad = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };
