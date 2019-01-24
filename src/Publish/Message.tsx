import * as React from 'react';
import './Message.css';
import { MentionsInput, Mention } from 'react-mentions'

const persons = [
  {
    id: 'sergiu',
    display: '@sergiu',
  },
  {
    id: 'stephane',
    display: '@stephane',
  },
  {
    id: 'irina',
    display: '@irina',
  },
  {
    id: 'victoria',
    display: '@victoria',
  },
  {
    id: 'anton',
    display: '@anton',
  },
  {
    id: 'misha',
    display: '@misha',
  },
]

const tags = [
  {
    id: 'happy',
    display: '#happy',
  },
  {
    id: 'unhappy',
    display: '#unhappy',
  },
  {
    id: 'cicd',
    display: '#cicd',
  },
  {
    id: 'omg',
    display: '#omg',
  },
]

interface IMessage {
  message: string;
}

class Message extends React.Component<{}, IMessage> {
  constructor(props: any){
    super(props);
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <div className="Message">
        <MentionsInput
          markup="@[__display__](__type__:__id__)"
          value={this.state.message}
          onChange={this.handleChange}>
          <Mention
            type="persons"
            trigger="@"
            data={persons}
          />
          <Mention
            type="tags"
            trigger="#"
            data={tags}
          />
        </MentionsInput>
      </div>
    );
  }

  private handleChange(event: any) {
    this.setState({ message: event.target.value, });
  }
}

export default Message;
