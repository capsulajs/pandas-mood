import * as React from 'react';
import './Form.css';
import Mood from './Mood';
import { Mood as MoodType } from '../services/api/Mood';

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


  public updateMessage = (message: string) => () => {
    this.setState({ message })
  };

  public render() {
    return (
      <div className="Form">
        <Mood selectMood={this.selectMood} selectedMood={this.state.mood}/>
        Suggestion (tags)
        Suggestion (users)
        <a className="button-primary">Publish</a>
      </div>
    );
  }
}

export default Form;
