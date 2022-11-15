import React from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
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
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        {this.countTotalFeedback() === 0 ? (<Section message="No feedback given" />) : (
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)}
        </div>
    );
  }
};

export default App;