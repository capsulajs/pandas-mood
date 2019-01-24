import * as React from 'react';
import './Message.css';
import { MentionsInput, Mention } from 'react-mentions'
import { Mood as MoodType } from '../services/api/Mood';

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

interface MessageProps {
  message: string;
  handleChange: (msg: string) => void
}

interface MessageState {
}

class Message extends React.Component<MessageProps, MessageState> {

  public render() {
    return (
      <div className="Message">
        <MentionsInput
          markup="@[__display__](__type__:__id__)"
          value={this.props.message}
          onChange={this.handleChangeEvent}>
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

  private handleChangeEvent = (event: any) => {
    this.props.handleChange(event.target.value);
  }
}

export default Message;
