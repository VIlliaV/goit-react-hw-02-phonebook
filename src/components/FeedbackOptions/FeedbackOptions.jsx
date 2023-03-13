import { List } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(name => (
      <li key={nanoid()}>
        <button name={name} type="button" onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      </li>
    ))}
  </List>
);
