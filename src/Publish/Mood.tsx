import * as React from 'react';
import './Mood.css';
import { Mood as MoodType } from '../services/api/Mood';
import mood0 from './img/0.png';
import mood1 from './img/1.png';
import mood2 from './img/2.png';
import mood3 from './img/3.png';
import mood4 from './img/4.png';
import MoodItem from './MoodItem';

interface MoodProps {}

interface MoodState {
  selectedMood: MoodType
}

class Mood extends React.Component<MoodProps, MoodState> {
  constructor(props: MoodProps) {
    super(props);
    this.state = {
      selectedMood: 2,
    };
  }

  public selectMood = (mood: MoodType) => () => {
    this.setState({ selectedMood: mood })
  };

  public render() {
    return (
      <div className="Mood">
        <MoodItem selected={this.state.selectedMood === 0} icon={mood0} select={this.selectMood(0)}/>
        <MoodItem selected={this.state.selectedMood === 1} icon={mood1} select={this.selectMood(1)}/>
        <MoodItem selected={this.state.selectedMood === 2} icon={mood2} select={this.selectMood(2)}/>
        <MoodItem selected={this.state.selectedMood === 3} icon={mood3} select={this.selectMood(3)}/>
        <MoodItem selected={this.state.selectedMood === 4} icon={mood4} select={this.selectMood(4)}/>
      </div>
    );
  }
}

export default Mood;
