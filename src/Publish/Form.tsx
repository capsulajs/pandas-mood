import * as React from 'react';
import './Form.css';
import Mood from './Mood';
import { Mood as MoodType } from '../services/api/Mood';
import Suggestion from './Suggestion';
import Message from './Message';

interface FormProps {
}

interface FormState {
  mood: MoodType;
  message: string;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      mood: 2,
      message: '',
    };
  }

  public selectMood = (mood: MoodType) => () => {
    this.setState({ mood })
  };


  public updateMessage = (message: string) => {
    this.setState({ message })
  };

  public appendToMsg = (tag: string) => () =>{
    this.updateMessage(this.state.message + ' ' + tag)
  };

  public render() {
    return (
      <div className="Form">
        <Mood selectMood={this.selectMood} selectedMood={this.state.mood}/>
        <Message
          message={this.state.message}
          handleChange={this.updateMessage}/>
        <Suggestion
          data={['#tag1', '#tag2', '#tag3']}
          handleClick={this.appendToMsg}/>
        <Suggestion
          data={['#sergiu', '@stephane', '@idan']}
          handleClick={this.appendToMsg}/>
        <a className="button-primary">Publish</a>
      </div>
    );
  }
}

export default Form;
