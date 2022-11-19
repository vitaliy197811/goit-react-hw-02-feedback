import React from 'react';
import css from './App.module.css';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Notification from './Notification/Notification.jsx';
import Statistics from './Statistics/Statistics.jsx';


class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      return Math.round(good / (good + neutral + bad) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return( 
        <div className={css.statistics}>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)
            }
          </Section>
        
        </div>
    );
  }
};

export default App;