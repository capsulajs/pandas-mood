import * as React from 'react';
import './Publish.css';
import Message from './Message';

class Publish extends React.Component {
  public render() {
    return (
      <div className="Publish">
        Account
        Form
          Mood
          <Message/ >
          Suggestion (tags)
          Suggestion (users)
          Submit
          Notification
      </div>
    );
  }
}

export default Publish;
