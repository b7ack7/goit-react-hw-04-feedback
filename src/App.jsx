import React, { Component } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Notification } from "components/Notification";
import { Statistics } from "components/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback  = (event) => {
    this.setState(prevState => {
      const {name} = event.target.dataset;
        return {
            [name]: prevState[name] + 1,
        };
    }) 
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const {countTotalFeedback} = this;
    return Math.round(good / countTotalFeedback() * 100) || 0;
  }
  render() {
    const {good, neutral, bad} = this.state;
    const options = Object.keys(this.state);
    const {addFeedback, countTotalFeedback, countPositiveFeedbackPercentage} = this;
    return (
      <>

      <Section title="Please leave feedback">
        <FeedbackOptions
        options={options}
        onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        { !countTotalFeedback() ? (
          <Notification message="There is no feedback" /> 
        ) : (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
        )
        }
      </Section>

    </>
    )
  }
};