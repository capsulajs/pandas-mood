import * as React from 'react';
import './Publish.css';
import Mood from './Mood';

class Publish extends React.Component {
  public render() {
    return (
      <div className="Publish">
        Form
          <Mood/>
          Message
          Suggestion (tags)
          Suggestion (users)
          Submit
          Notification
      </div>
    );
  }
}

export default Publish;
