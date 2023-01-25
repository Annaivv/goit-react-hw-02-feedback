import React, { Component } from 'react';
import './Feedback.css';

export class FeedbackOptions extends Component {
  state = {
    activeOptionIdx: null,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['button'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('button--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((option, index) => {
          return (
            <button
              key={index}
              className={this.makeOptionClassName(index)}
              onClick={() => {
                this.setActiveIdx(index);
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
