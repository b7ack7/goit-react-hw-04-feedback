import React, { useState } from "react";
import { Section } from "components/Section";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Notification } from "components/Notification";
import { Statistics } from "components/Statistics";

export const App =()=> {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ["good", "neutral", "bad"];

  const addFeedback  = (event) => {
    const {name} = event.target.dataset;
    switch(name) {
      case "good":
        setGood(good => good + 1);
        break;
      case "neutral":
        setNeutral(neutral => neutral + 1);
        break;
      case "bad":
        setBad(bad => bad + 1);
        break;
      default:
        return;  
    }
  }

  const countTotalFeedback = () => {
   return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100) || 0;
  }

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
};
