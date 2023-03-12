// import React, { Component } from 'react';
// import Section from './components/Section/Section';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
// import Statistics from './components/Statistics/Statistics';
// import Notification from './components/Notification/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className="App">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {totalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;

// !=======FeedbackOptions
// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './FeedbackOptions.module.css';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div className={s.btnContainer}>
//       {options.map(option => (
//         <button
//           key={option}
//           type="button"
//           className={s[option]}
//           onClick={() => onLeaveFeedback(option)}
//         >
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;

// !====== Notification
// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Notification.module.css';

// const Notification = ({ message }) => {
//   return <p className={s.message}>{message}</p>;
// };

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default Notification;

// !====================================Section
// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Section.module.css';

// const Section = ({ title, children }) => {
//   return (
//     <section>
//       <h2 className={s.title}>{title}</h2>
//       {children}
//     </section>
//   );
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Section;

// !======Statistics

// import React from 'react';

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <>
//       <h2>Statistics</h2>
//       <p>Good: {good}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {positivePercentage}%</p>
//     </>
//   );
// };

// export default Statistics;
