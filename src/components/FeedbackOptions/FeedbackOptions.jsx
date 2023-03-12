import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(name => (
      <li key={nanoid()}>
        <button name={name} type="button" onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </ul>
);
